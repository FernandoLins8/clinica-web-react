import { api } from "./api"

export const servicesApi = {
  async index() {
    return api.get('/services')
  }
}