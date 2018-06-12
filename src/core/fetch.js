/*
 * @Author: Michael
 * @Date: 2018-06-12 15:43:02
 * @Last Modified by:   Michael
 * @Last Modified time: 2018-06-12 15:43:02
 */

import axios from 'axios';

export default function fetch(url, data = {}, options = {}) {
  return new Promise((resolve, reject) => {

    const instance = axios.create();

    const params = {
      timeout: 30000
    };

    instance.interceptors.request.use((config) => {
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    const config = Object.assign(params, options, { data, url, method: 'POST' });
    console.log(new Date().toLocaleString(), config);
    instance(config).then(res => {
      console.log(res.data);
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
}
