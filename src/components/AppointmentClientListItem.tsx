import * as Separator from '@radix-ui/react-separator';
import { ClientAppointment } from '../Pages/ClientAppointments';
import { getFormatedDateTime } from "../utils/getFormatedDateTime"

interface Props {
  appointment: ClientAppointment
}

export function AppointmentClientListItem({ appointment }: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <span>Criado: {getFormatedDateTime(String(appointment.createdAt))}</span>
        <span>Profissional: {appointment.professional.name}</span>
        <span>Iniciado: {appointment?.startTime ? getFormatedDateTime(appointment.startTime) : 'Não iniciado'}</span>
        <span>Finalizado: {appointment?.endTime ? getFormatedDateTime(appointment?.endTime) : 'Não finalizado'}</span>
        <button 
          className="block w-24 h-10 py-2 text-center bg-indigo-400 hover:bg-indigo-500 text-white font-medium rounded-lg"
        >
          Detalhes
        </button>
      </div>
      <Separator.Root className="h-[1px] w-full bg-slate-400 my-8" />
    </>
  )
}

