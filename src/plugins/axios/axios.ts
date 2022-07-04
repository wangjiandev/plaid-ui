import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { IResponseResult } from '@/types/response'
import { close, start } from '@/plugins/nprogress'

export default class Axios {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public request<T, D = IResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise<D>((resolve, reject) => {
      try {
        this.instance.request<D>(config).then((response) => {
          resolve(response.data)
        })
      }
      catch (errr) {
        reject(errr)
      }
    })
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        start()
        // config.headers = {
        //   Accept: 'application/json',
        //   Authorization: 'Bearer 123456', // ${store.get(CacheEnum.TOKEN_NAME)}
        // }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        // if (response.data?.message)
        close()
        return response
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  }
}
