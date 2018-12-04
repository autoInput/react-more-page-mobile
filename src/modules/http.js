import axios from 'axios'

let conf = {
  url: '',
  method: 'get',
  //baseURL: 'http://prod.wdjzt88.com',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  data: {}
}

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

class Http {
  get(url, data) {
    conf.url = url
    conf.data = data
    conf.method = 'get'

    return new Promise((resolve, reject) => {
      axios(conf)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  post(url, data) {
    conf.url = url
    conf.data = data
    conf.method = 'post'
    return new Promise((resolve, reject) => {
      axios(conf)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

// export default new Http()

var http = new Http()

//test json api
export function getTestJson() {
  return http.get('./test.json')
}
