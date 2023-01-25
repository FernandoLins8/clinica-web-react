import { Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/auth'
import { Admin } from './Pages/Admin'
import { AuthTabs } from './Pages/AuthTabs'
import { Home } from './Pages/Home'
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
        <Route path="/admin" element={< Admin/>} /> :
        <Route path="/home" element={< Home/>} />
      }
      <Route path="services" element={< Services/>} />
      <Route path="services/:id" element={< ServiceDetail/>} />
      <Route path="services/novo-servico" element={< NewService/>} />

      <Route path="profissionais" element={< Professionals/>} />
      <Route path="profissionais/:id" element={< ProfessionalDetail/>} />
      <Route path="profissionais/novo-profissional" element={< NewProfessional/>} />
    </Routes>
  )
}

export function Paths() {
  const { signed } = useAuth()

  return (
    signed ? <PrivateRoutes /> : < PublicRoutes/>
  )
}