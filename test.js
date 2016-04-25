import test from 'ava'
import axios from 'axios'

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImVnb2lzdCIsImVtYWlsIjoiMHgxNDI4NTdAZ21haWwuY29tIiwiaWF0IjoxNDYxNTY4NzQ2fQ.AtvVk8yqsrYTShnFpEc8NjBa-phFgODvL2fU04zel-p72V4HTQhm_hyN5Y1o8Hii6rdLMhh6slSD6Gj5bCNShfJgoKQaBcNwp7HG7apvDnghhXNrBxAQqdGrEMtMbIhMmTRwSKl4YzhKa428-Be_rsu3KWMdjuEjj-7mbYhkin9rX7sFc_IUlrw-58c3bAJJ4q1iSCHiigDroyCLc1VakMTq2A7wxJlSlgcO0VZeWFhpx-xkKMrkjUun2nfwqJLTlFU-aabOJghsYqZHV0JlDij3Z4rEEx6hIoOmDfWVk2U_Y8ECC3YXASVcQO1rTJcTc84TdNAGk3En1rBm`

test('main', async t => {
  const api = axios.create({
    baseURL: 'http://localhost:3066',
    headers: {
        Authorization: `Bearer ${token}`
      }
  })
  const ret = await api.get('/api/me')
  console.log(ret)
  t.pass()
})
