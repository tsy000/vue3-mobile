import axios from 'axios'
// import { resReject, resResolve, reqReject, reqResolve } from './interceptors'
import { resReject, resResolve } from './interceptors'
const { VUE_APP_ENV, VUE_APP_BASE_APIHTTP, VUE_APP_BASE_USERHTTP, VUE_APP_appCode, VUE_APP_poolCode } = process.env
import { sStorage } from '@/utils'


// console.log( 'gateway', process.env, VUE_APP_BASE_APIHTTP);

const baseURL = '/'
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'poolCode': VUE_APP_poolCode, 
  'appCode': VUE_APP_appCode
}
const service = axios.create({
  timeout: 12000,
  baseURL: baseURL,
  headers,
})
// service.interceptors.request.use(reqResolve, reqReject)
service.interceptors.request.use(
  (config) => {
    if (config.url.startsWith('/idaasweb')) {
      config.baseURL = VUE_APP_BASE_USERHTTP
    } else if (config.url.startsWith('/api')) {
      config.baseURL = VUE_APP_BASE_APIHTTP
    }
    if (
      config.data &&
      config.method === 'post' &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      //   config.data = JSON.stringify(config.data)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(resResolve, resReject)

export const request = {
  GET: (url, params = {}) => {
    let config = {
      url,
      method: 'GET',
      params: { ...params },
      headers: Object.assign(headers, { 'authorization': sStorage && sStorage.get('token') }),
    }
    return service(config)
  },
  POST: (url, data = {}) => {
    let config = {
      url,
      method: 'POST',
      headers: Object.assign(headers, { 'authorization': sStorage && sStorage.get('token'),'Content-Type': 'application/json' }),
      data,
    }
    return service(config)
  },
  PUT: (url, data = {}) => {
    let config = {
      url,
      method: 'PUT',
      headers: Object.assign(headers, { 'authorization': sStorage && sStorage.get('token'),'Content-Type': 'application/json;charset=utf-8' }),
      data,
    }
    return service(config)
  },
  DOWNPDF: (url, data = {}) => {
    let config = {
      url,
      method: 'GET',
      data,
      headers: object.assign(headers, {
        'authorization': sStorage && sStorage.get('token'),
        'Content-Type': 'multipart/form-data',
      }),
      responseType: 'blob',
    }
    return service(config)
  },
  UPLOAD: (url, data = {}) => {
    let config = {
      url,
      method: 'POST',
      headers: {
        'authorization': sStorage && sStorage.get('token'),
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Content-Type': 'multipart/form-data',
      },
      data,
      processData: false,
      mimeType: 'multipart/form-data',
      contentType: false,
      timeout: 60 * 10000,
    }
    return service(config)
  },
  DOWNFILE: (url, params = {}, downFileName = '') => {
    let config = {
      url,
      method: 'GET',
      params: { downFileName, ...params },
      headers: {
        'authorization': sStorage && sStorage.get('token'),
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment',
        Pragma: 'No-cache',
        'Cache-Control': 'No-cache',
        Expires: 0,
      },
    }
    return service(config)
  },


}
