import { useEffect, useState } from "react";
import { AppointmentListItem } from "../components/AppointmentListItem";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { appointmentApi } from "../services/api/appointment";

export interface Appointment {
  id: string
  clientId: string
  professionalId: string
  attendeeId?: string
  startTime?: string
  endTime?: string
  createdAt: Date
  updatedAt: Date
  client: {
    name: string
  }
  professional: {
    name: string
  }
}

export function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const notStartedAppointments = appointments?.filter(appointment => appointment.startTime == null).slice(0, 3)
  const inProgressAppointments = appointments?.filter(appointment => appointment.startTime && appointment.endTime == null).slice(0, 3)
  const finishedAppointments = appointments?.filter(appointment => appointment.endTime != null).slice(0, 3)

  useEffect(() => {
    getAppointments()
  }, [])

  async function getAppointments() {
    const appointmentsRes = await appointmentApi.findAll()
    setAppointments(appointmentsRes.data)
  }
  
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Atendimentos" />
      </div>
      <div className="py-16 col-span-10">
        <h1 className="text-2xl font-medium uppercase text-center mb-4">Atendimentos</h1>
        <p className="text-lg text-center mb-8">Histórico de atendimentos.</p>
        <section className="grid grid-cols-2 gap-y-8 m-20 text-center">
          <h2 className="text-2xl text-left">Em Andamento</h2>
          <div className="col-span-2 px-8">
          {
            inProgressAppointments.length != 0 ? (
              inProgressAppointments.map(appointment => (
                <AppointmentListItem 
                  appointment={appointment}
                />
              ))
            )
              :
            <span>Nenhum atendimento em andamento.</span>
          }
          </div>
        </section>
        <section className="grid grid-cols-2 gap-y-8 m-20 text-center">
          <h2 className="text-2xl text-left">Não Iniciados</h2>
          <div className="col-span-2 px-8">
          {
            notStartedAppointments.length != 0 ? (
              notStartedAppointments.map(appointment => (
                <AppointmentListItem 
                  appointment={appointment}
                />
              ))
            )
              :
            <span>Nenhum atendimento em andamento.</span>
          }
          </div>
        </section>
        <section className="grid grid-cols-2 gap-y-8 m-20 text-center">
          <h2 className="text-2xl text-left">Finalizados</h2>
          <div className="col-span-2 px-8">
          {
            finishedAppointments.length != 0 ? (
              finishedAppointments.map(appointment => (
                <AppointmentListItem 
                  appointment={appointment}
                />
              ))
            )
              :
            <span>Nenhum atendimento em andamento.</span>
          }
          </div>
        </section>
      </div>
    </div>
  )
}