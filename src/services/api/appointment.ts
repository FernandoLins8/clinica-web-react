import { api } from "./api"

interface createAppointmentDto {
  professionalId: string
  servicesIds: string[]
}

export const appointmentApi = {
  async create(data: createAppointmentDto) {
    return api.post('/appointments', data)
  },
  async findAll() {
    return api.get('/appointments')
  },
  async findAllFromUser() {
    return api.get('/appointments/client')
  }
}