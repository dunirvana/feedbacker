import axios from 'axios'
import router from '../router'
import { setGlobalLoading } from '../store/global'
import AuthService from './auth'
import UsersService from './users'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use((response) => {
  // sucesso
  setGlobalLoading(false)
  return response
}, (error) => {
  // erro
  const canThrowAnError = error.request.status === 0 || error.request.status === 500
  setGlobalLoading(false)

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient)
}
