import { useAuth } from "../../contexts/auth";
import * as Avatar from '@radix-ui/react-avatar';
import { SidebarItem } from "./components/SidebarItem";
import { useState } from "react";

export function Sidebar() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('Novo Atendimento')
  
  return (
    <div className="fixed h-screen w-64 bg-slate-200 text-center">
      <div className="py-6">
        <div className="mt-4 mb-8">
          <Avatar.Root className="flex justify-center">
            <Avatar.Image 
              src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${user?.name}`} 
              className="rounded-full my-2"
            />
            <Avatar.Fallback />
          </Avatar.Root>

          <h1 className="text-lg font-medium">{user?.name}</h1>
          <button className="text-base">Logout</button>
        </div>
        <nav className="mt-4">
          {
            user?.role == "admin" ? (
              <>
                <SidebarItem href="#" title="Atendimentos" active={activeTab === "Atendimentos"} onClick={() => setActiveTab("Atendimentos")} />
                <SidebarItem href="#" title="Serviços" active={activeTab === "Serviços"} onClick={() => setActiveTab("Serviços")} />
                <SidebarItem href="#" title="Profissionais" active={activeTab === "Profissionais"} onClick={() => setActiveTab("Profissionais")} />
                <SidebarItem href="#" title="Clientes" active={activeTab === "Clientes"} onClick={() => setActiveTab("Clientes")} />
              </>
            ) : (
              <>
                <SidebarItem href="#" title="Novo Atendimento" active={activeTab === "Novo Atendimento"} onClick={() => {setActiveTab("Novo Atendimento")}} />
                <SidebarItem href="#" title="Meus Atendimento" active={activeTab === "Meus Atendimento"} onClick={() => setActiveTab("Meus Atendimento")} />
                <SidebarItem href="#" title="Serviços" active={activeTab === "Serviços"} onClick={() => setActiveTab("Serviços")} />
                <SidebarItem href="#" title="Profissionais" active={activeTab === "Profissionais"} onClick={() => setActiveTab("Profissionais")} />
              </>
            )
          }
        </nav>
      </div>
    </div>
  );
}
