/*
 * @Author: Michael 
 * @Date: 2018-05-17 17:14:40 
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:32:56
 */
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: false
  },
  globals: {
    "$": true,
    "_": true,
    Promise: true,
    wx: true,
    SERVER: true,
    VERSION: true
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // check if imports actually resolve
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  "rules": {
    // don"t require .vue extension when importing
    "import/extensions": ["error", "never", {
      "js": "never",
      "vue": "never",
    }],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": ["error", {
      "optionalDependencies": ["test/unit/index.js"]
    }],
    // 禁止使用数组构造器 new Array()
    "no-array-constructor": 2,
    // 箭头函数用小括号括起来
    "arrow-parens": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // always required semicolons
    "semi": [2, "always"],
    "no-extra-semi": 2,//禁止多余的冒号
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],//不能有声明后未被使用的变量或参数
    "no-use-before-define": 2,//未定义前不能使用
    "no-useless-call": 2,//禁止不必要的call和apply
    "no-delete-var": 2,//不能对var声明的变量使用delete操作符
    "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-duplicate-case": 2,//switch中的case标签不能重复
    "no-empty": 2,//块语句中的内容不能为空
    "no-extra-bind": 2,//禁止不必要的函数绑定
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "prefer-template": ["error"],  // 使用es6的`符号进行字符串拼接
    "no-param-reassign": 0,  // 禁止给参数重新赋值
    "spaced-comment": 0,  // 注释风格不要有空格什么的
    "no-alert": 0,
    "func-names": 0,  // 函数表达式必须有名字
    "object-shorthand": 0, //强制对象字面量缩写语法
    // console
    "no-console": process.env.NODE_ENV === "production" ? ["warn", { allow: ["warn"] }] : ["off"],

    "no-plusplus": 0,//禁止使用++，--
    "consistent-return": 0,//return 后面是否允许省略
    "no-unused-expressions": 2,//禁止无用的表达式
    "no-extend-native": 2,//禁止扩展native对象
    "max-len": 0,
    "no-restricted-properties": 0,  // 禁止修改特定的属性
    "arrow-body-style": 0,  // 箭头函数体使用大括号 
    "no-mixed-operators": 0,  // 禁止混合使用不同的操作符
    "radix": ["error", "as-needed"],  // parseInt必须指定第二个参数
    "no-underscore-dangle": 0,  // 标识符不能以_开头或结尾
    "prefer-arrow-callback": 2,  // 要求使用箭头函数作为回调
    "no-restricted-syntax": 2, // 不推荐用for-in for-of。推荐用.forEach
    "guard-for-in": 0,//for in循环要用if语句过滤
    "no-lonely-if": 0,
    "quotes": 0,  // 引号类型
    "import/no-unresolved": 0,
    "padded-blocks": 0,//块语句内行首行尾是否要空行
    "array-callback-return": 0,
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }]
  }
}
