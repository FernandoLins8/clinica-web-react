import { api } from "./api"

export const servicesApi = {
  async index() {
    return api.get('/services')
  },
  async create(name: string, value: number, durationInMinutes: number) {
    return api.post('/services', {
      name,
      value,
      durationInMinutes
    })
  }
}