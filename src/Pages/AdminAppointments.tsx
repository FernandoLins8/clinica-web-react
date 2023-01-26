import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { appointmentApi } from "../services/api/appointment";
import { getFormatedDateTime } from "../utils/getFormatedDateTime";
import * as Separator from '@radix-ui/react-separator';

interface AdminAppointment {
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
}

export function AdminAppointments() {
  const [appointments, setAppointments] = useState<AdminAppointment[]>()

  useEffect(() => {
    getAppointments()
  }, [])
  
  async function getAppointments() {
    const appointmentsRes = await appointmentApi.findAll()
    setAppointments(appointmentsRes.data)
  }
  
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Atendimentos" />
      </div>
      <div className="py-16 col-span-10">
        <h1 className="text-2xl font-medium uppercase text-center mb-4">Atendimentos</h1>
        <p className="text-lg text-center mb-8">Histórico de atendimentos.</p>
        <div className="grid grid-cols-2 gap-y-14 m-20 text-center">
          {
            appointments?.map(appointment => (
              <div key={appointment.id} className="col-span-2 px-8">
                <div className="flex justify-between items-center">
                  <span>Cliente: {appointment.client.name}</span>
                  <span>Criado: {getFormatedDateTime(String(appointment.createdAt))}</span>
                  <span>Iniciado: {appointment?.startTime ? getFormatedDateTime(appointment.startTime) : 'Não iniciado'}</span>
                  <span>Finalizado: {appointment?.endTime ? getFormatedDateTime(appointment?.endTime) : 'Não finalizado'}</span>
                  <button 
                    className="block w-24 h-10 py-2 text-center bg-indigo-400 hover:bg-indigo-500 text-white font-medium rounded-lg"
                  >
                    Detalhes
                  </button>
                </div>
                <Separator.Root className="h-[1px] w-full bg-slate-400 my-4" />
              </div>
            ))            
          }          
        </div>
      </div>
    </div>
    </>
  )
}