/*
 * @Author: Michael
 * @Date: 2018-06-12 15:29:47
 * @Last Modified by:   Michael
 * @Last Modified time: 2018-06-12 15:29:47
 */
const fs = require('fs')
const path = require('path')
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const LRU = require('lru-cache')
const app = new express();
const morgan = require('morgan');
const FileStreamRotator = require('file-stream-rotator')
const resolve = file => path.resolve(__dirname, file)
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')
const createTitle = require('./src/core/createTitle');
const titleMap = (new createTitle()).init();

const isProd = process.env.NODE_ENV === 'production';
const logDirectory = path.join(__dirname, 'log')

function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      template,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      basedir: resolve('./dist'),
      runInNewContext: false
    })
  )
}

let renderer
if (isProd) {
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    clientManifest
  })
} else {
  require('./build/setup-dev-server')(app, (bundle, template) => {
    renderer = createBundleRenderer(bundle, {
      template,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      runInNewContext: false
    })
  })
}

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

// setup the logger
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms :date[clf]', { stream: accessLogStream }))
app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))
/**
 * 渲染函数
 * @param ctx
 * @param next
 * @returns {Promise}
 * 
 */
app.get('*', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const handleError = err => {
    if (err && err.code === 404) {
      res.sendFile(__dirname + '/public/html/404.html');
    } else {
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
      res.sendFile(__dirname + '/public/html/500.html');
    }
  }
  const context = {
    title: titleMap[req.url],
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    } else {
      res.end(html);
    }
  })
})


const port = process.env.PORT || 8089
app.listen(port, '0.0.0.0', () => {
  console.log(`server started at localhost:${port}`)
})