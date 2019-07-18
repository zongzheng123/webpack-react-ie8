import axios from 'axios'
import server from './server'

const defaultConfig = {
  method: 'app',
  server: server.app,
  responseType: 'json'
}

export default function request(apiConfig, params){
  const config = {
    method: apiConfig.method || defaultConfig.method,
    url: ( server[apiConfig.app] || defaultConfig.server)['baseUrl'] + apiConfig.path,
    responseType: apiConfig.responseType || defaultConfig.responseType
  }
  return axios(config);
}