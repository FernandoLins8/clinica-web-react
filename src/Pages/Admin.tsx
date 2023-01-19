import { useState } from "react";
import { Appointments } from "../components/Appointments";
import { Clients } from "../components/Clients";
import { Professionals } from "../components/Professionals";
import { Services } from "../components/Services";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function Admin() {
  const [currentTab, setCurrentTab] = useState("Atendimentos")
  
  function handleTabClick(tableTitle: string) {
    setCurrentTab(tableTitle)
  }
  
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar onTabClick={handleTabClick} />
      </div>
      <div className="col-span-10">
        {currentTab === "Atendimentos" ? <Appointments /> : null}
        {currentTab === "Serviços" ? <Services /> : null}
        {currentTab === "Profissionais" ? <Professionals /> : null}
        {currentTab === "Clientes" ? <Clients /> : null}
      </div>
    </div>
    </>
  )
}