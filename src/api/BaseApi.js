import axios from 'axios';
import {config} from './config';

const baseURL = config.ROOT_URL;

export default class BaseApi {
  static setDefaults(accessToken) {
    const d = axios.defaults;
    d.baseURL = baseURL;
    if (accessToken) {
      const AUTH_TOKEN = 'Bearer '.concat(accessToken);
      d.headers.common.Authorization = AUTH_TOKEN;
    } else {
      delete d.headers.common.Authorization;
    }
    d.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    d.headers.post.Accept = 'application/json';
    d.withCredentials = true;
    d.timeout = 60000;
  }

  static transformResponse() {
    return {
      transformResponse: [
        function(data) {
          return data ? JSON.parse(data) : {};
        },
      ],
    };
  }

  static handleException(ex) {
    if (ex.response) {
      const {response} = ex;
      if (response.data) {
        const {data} = response;
        // alert if there is an error
        return;
      }
    }
    // alert if there is an error
  }

  static handleResponse(callback, response) {
    if (typeof callback === 'function') {
      callback(response);
    }
  }

  static async get(api, params, callback) {
    const me = this;
    await axios({
      method: 'get',
      url: api,
      data: params,
    })
      .then(function(response) {
        const result = response.status;
        if (result !== 200) {
          me.handleException(response);
        } else {
          me.handleResponse(callback, response);
        }
      })
      .catch(function(response) {
        me.handleException(response);
      });
  }
}
