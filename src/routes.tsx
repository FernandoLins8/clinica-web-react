import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/auth'
import { Admin } from './Pages/Admin'
import { AuthTabs } from './Pages/AuthTabs'
import { Home } from './Pages/Home'

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
    </Routes>
  )
}

export function Paths() {
  const { signed } = useAuth()

  return (
    signed ? <PrivateRoutes /> : < PublicRoutes/>
  )
}