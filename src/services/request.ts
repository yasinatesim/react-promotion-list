// @ts-nocheck
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const getBaseHeaders = (headers: AxiosRequestHeaders = {}) => {
  const authToken = localStorage.getItem('token');

  if (authToken) {
    return {
      ...headers,
      'X-Auth-Token': authToken,
    };
  }

  return headers;
};

class Request {
  baseHeaders = getBaseHeaders();

  instance = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    headers: {
      ...getBaseHeaders(),
    },
  });

  get = async <T>(dest: string, params = {}, config: Partial<AxiosRequestConfig> = {}): Promise<T> => {
    const { data } = await this.instance.get<T>(dest, {
      ...config,
      headers: getBaseHeaders(config.headers),
      params,
    });

    return data;
  };
}

export default new Request();
