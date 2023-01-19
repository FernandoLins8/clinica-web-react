import { api } from "./api"

export const usersApi = {
  async getInfo() {
    return api.get('/users')
  },
  async create(name: string, email: string, password: string) {
    return api.post('/users', {
      name,
      email,
      password
    })
  }
}