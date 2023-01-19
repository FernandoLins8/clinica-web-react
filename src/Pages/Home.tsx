import { useState } from "react"
import { Appointments } from "../components/Appointments"
import { NewAppointment } from "../components/NewAppointment"
import { Professionals } from "../components/Professionals"
import { Services } from "../components/Services"
import { Sidebar } from "../components/Sidebar/Sidebar"

export function Home() {
  const [currentTab, setCurrentTab] = useState("Novo Atendimento")

  function handleTabClick(tabTitle: string) {
    setCurrentTab(tabTitle)
  }
  
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar onTabClick={handleTabClick} />
      </div>
      <div className="col-span-10 pl-16">
        {currentTab === "Novo Atendimento" ? <NewAppointment /> : null}
        {currentTab === "Meus Atendimentos" ? <Appointments /> : null}
        {currentTab === "Serviços" ? <Services /> : null}
        {currentTab === "Profissionais" ? <Professionals /> : null}
      </div>
    </div>
    </>
  )
}