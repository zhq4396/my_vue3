import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})
function toQueryString(obj) {
    return obj
      ? Object.keys(obj)
        .sort()
        .map(function (key) {
          var val = obj[key];
          if (Array.isArray(val)) {
            return val
              .sort()
              .map(function (val2) {
                return key + "=" + filterSpecialChars(val2);
              })
              .join("&");
          }
          return key + "=" + filterSpecialChars(val);
        })
        .join("&")
      : "";
  }
// 处理特殊字符: ! ~ * ' ( )
function filterSpecialChars(str) {
    if (str && str.length) {
      str = str.replace(/\!/g, "%21");
      str = str.replace(/\~/g, "%7e");
      str = str.replace(/\*/g, "%2A");
      str = str.replace(/\'/g, "%27");
      str = str.replace(/\(/g, "%28");
      str = str.replace(/\)/g, "%29");
    }
    return str;
  }
//请求响应拦截
service.interceptors.response.use(
    (res) => {
      if (res.data.errcode == 0) {
        return Promise.resolve(res);
      } else if (res.data.errcode == 2001 || res.data.errcode == 3001) {
        selfRequst().then(() => {
          router.go(0) //重新加载页面，重新请求相应的接口
          // let str = res.config.url
          // str =  str.replace(window.location.origin+'/apis','')
          // fetchEndpoint(str, JSON.parse(res.config.data), true, res.config.method)
        })
      } else if (res.data.errcode == 1002) {
        router.push('/clockIn')
        return Promise.reject(res);
      } else {
        return Promise.reject(res);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // 请求加密
  service.interceptors.request.use(
    (config) => {
      var params = config.data || {};
      let post_body = config.headers.selfType ? params : toQueryString(params);
      config.headers["Content-Type"] = config.headers.selfType
        ? "application/json; charset=utf-8"
        : "application/x-www-form-urlencoded; charset=utf-8";
      config.data = post_body;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
const request = (url, data, method = true) => {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: method?'POST':'GET',
            data,
        }).then(res => {
            resolve(res)
        }).catch(res => {
            reject(res)
        })
    })
}
export default request