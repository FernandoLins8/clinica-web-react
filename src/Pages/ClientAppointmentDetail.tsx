import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import * as Separator from '@radix-ui/react-separator';
import { useEffect, useState } from "react";
import { appointmentApi } from "../services/api/appointment";
import { ClientAppointment } from "./ClientAppointments";
import { getFormatedDateTime } from "../utils/getFormatedDateTime";

export interface AppointmentDetail {
  id: string
  startTime?: Date,
  endTime?: Date,
  createdAt: Date
  summary: {
    servicesCost: number
    professionalCommission: number
    totalCost: number
    expectedDurationInMinutes: number
    appointmentDurationInMinutes: number | null
  }
}

export function ClientAppointmentDetail() {
  const [appointment, setAppointment] = useState<AppointmentDetail | null>(null)

  const navigate = useNavigate()
  const location = useLocation()
  const { id: appointmentId }: ClientAppointment = location.state

  useEffect(() => {
    getAppointmentDetail()
  }, [])

  async function getAppointmentDetail() {
    const appointmentDetails = await appointmentApi.get(appointmentId)
    setAppointment(appointmentDetails.data)
  }

  function handleGoBack() {
    navigate(-1)
  }
  
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Meus Atendimentos" />
      </div>
      <div className="relative col-span-10 px-8 py-16">
        <button onClick={handleGoBack} className="absolute cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <h1 className="text-2xl font-medium uppercase text-center mb-4">Detalhes do Atendimento</h1>
        <section className="flex justify-center">
          <div className="w-80 gap-y-8 mx-20 mt-16 text-center">
            <h2 className="text-2xl text-left mb-4">Valores</h2>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Custo dos Serviços</span>
              <span>R$ {appointment?.summary.servicesCost}</span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Comissão do Profissional</span>
              <span>R$ {appointment?.summary.professionalCommission}</span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span><strong>Total</strong></span>
              <span><strong>R$ {appointment?.summary.totalCost}</strong></span>
            </div>
          </div>
          <div className="w-80 gap-y-8 mx-20 mt-16 text-center">
            <h2 className="text-2xl text-left mb-4">Tempo</h2>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Solicitado em</span>
              <span>
                { appointment ? getFormatedDateTime(appointment?.createdAt) : '' }
              </span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Iniciado</span>
              <span>
                { appointment?.startTime ? getFormatedDateTime(appointment.startTime) : 'Não iniciado' }
              </span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Finalizado</span>
              <span>
                { appointment?.endTime ? getFormatedDateTime(appointment.endTime) : 'Não finalizado' }
              </span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span>Tempo Previsto</span>
              <span>
                { appointment ? `${appointment.summary.expectedDurationInMinutes} min ` : '' }
              </span>
            </div>
            <div className="flex justify-between border-b border-black mb-4">
              <span><strong>Tempo Decorrido</strong></span>
              <span>
                <strong>
                  { appointment?.summary.appointmentDurationInMinutes ? `${appointment.summary.appointmentDurationInMinutes} min ` : '' }
                </strong>
              </span>
            </div>
          </div>
        </section>
        <Separator.Root className="h-[1px] w-full bg-slate-400 my-8" />
      </div>
    </div>
  )
}