import axios from 'axios'
import uuid from 'uuid'

axios.interceptors.request.use((config) => {
    config.withCredentials = true;
    if (config.params === undefined) {
      config.params = {};
    }
  
    config.params.requestId = uuid.v1().replace(/-/g,''); //请求唯一id
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(function (response) {
    if (response.status === 200) {
      if (response.data.code === 200) {
        return response.data.data;
      } else {
        return Promise.reject(response.data.msg)
      }
    } else {
      return Promise.reject(response.statusText)
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//请求api demo
const prefix = "/goals_service/goals/";

export const getAllDoneNumber = (params) =>{
  return axios.get(prefix + 'getAllDoneNumber',{params});
};

// export const setAutoPunchCard = (data) =>{
//     return axios.post('/goals_service/goalsDetail/openOrCloseAutoPunchCard',data);
// };