import { Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/auth'
import { AdminAppointments } from './Pages/AdminAppointments'
import { AuthTabs } from './Pages/AuthTabs'
import { ClientAppointmentDetail } from './Pages/ClientAppointmentDetail'
import { ClientAppointments } from './Pages/ClientAppointments'
import { NewAppointment } from './Pages/NewAppointment'
import { NewProfessional } from './Pages/NewProfessional'
import { NewService } from './Pages/NewService'
import { ProfessionalDetail } from './Pages/ProfessionalDetail'
import { Professionals } from './Pages/Professionals'
import { ServiceDetail } from './Pages/ServiceDetail'
import { Services } from './Pages/Services'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={< AuthTabs/>} />
    </Routes>
  )
}

export function PrivateRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      {
        user?.role == 'admin' ? 
        (
          <>
            <Route path="/atendimentos" element={< AdminAppointments/>} />
            <Route path="profissionais/novo-profissional" element={< NewProfessional/>} />
            <Route path="services/novo-servico" element={< NewService/>} />
          </>
        ) : (
          <>
            <Route path="novo-atendimento" element={<NewAppointment />} />

            <Route path="meus-atendimentos" element={<ClientAppointments />} />
            <Route path="meus-atendimentos/:id" element={<ClientAppointmentDetail />} />
          </>
        )
      }
      <Route path="services" element={< Services/>} />
      <Route path="services/:id" element={< ServiceDetail/>} />

      <Route path="profissionais" element={< Professionals/>} />
      <Route path="profissionais/:id" element={< ProfessionalDetail/>} />

    </Routes>
  )
}

export function Paths() {
  const { signed } = useAuth()

  return (
    signed ? <PrivateRoutes /> : < PublicRoutes/>
  )
}