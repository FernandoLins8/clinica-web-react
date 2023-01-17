import { api } from "./api"

export const usersApi = {
  async getInfo() {
    return api.get('/users')
  }
}