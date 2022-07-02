// 请求响应结构
export interface IResponseResult<T> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}
