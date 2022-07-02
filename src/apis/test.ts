import { http } from '@/plugins/axios'

export default async function test() {
  const result = await http.request<string>({
    url: '/todos/1',
    method: 'get',
  })
  console.log(result)
}

