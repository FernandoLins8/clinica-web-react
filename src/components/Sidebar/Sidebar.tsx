import { useAuth } from "../../contexts/auth";
import * as Avatar from '@radix-ui/react-avatar';
import { SidebarItem } from "./components/SidebarItem";
import { useState } from "react";

interface Props {
  onTabClick: (tabTitle: string) => void
}

export function Sidebar({ onTabClick }: Props) {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState(user!.role == 'admin' ? 'Atendimentos' : 'Novo Atendimento')

  function handleActiveTabChange(tabTitle: string) {
    setActiveTab(tabTitle)
    onTabClick(tabTitle)
  }
  
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
          <button
            className="text-base"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <nav className="mt-4">
          {
            user?.role == "admin" ? (
              <>
                <SidebarItem href="#" title="Atendimentos" active={activeTab === "Atendimentos"} onClick={() => handleActiveTabChange("Atendimentos")} />
                <SidebarItem href="#" title="Serviços" active={activeTab === "Serviços"} onClick={() => handleActiveTabChange("Serviços")} />
                <SidebarItem href="#" title="Profissionais" active={activeTab === "Profissionais"} onClick={() => handleActiveTabChange("Profissionais")} />
                <SidebarItem href="#" title="Clientes" active={activeTab === "Clientes"} onClick={() => handleActiveTabChange("Clientes")} />
              </>
            ) : (
              <>
                <SidebarItem href="#" title="Novo Atendimento" active={activeTab === "Novo Atendimento"} onClick={() => {handleActiveTabChange("Novo Atendimento")}} />
                <SidebarItem href="#" title="Meus Atendimentos" active={activeTab === "Meus Atendimentos"} onClick={() => handleActiveTabChange("Meus Atendimentos")} />
                <SidebarItem href="#" title="Serviços" active={activeTab === "Serviços"} onClick={() => handleActiveTabChange("Serviços")} />
                <SidebarItem href="#" title="Profissionais" active={activeTab === "Profissionais"} onClick={() => handleActiveTabChange("Profissionais")} />
              </>
            )
          }
        </nav>
      </div>
    </div>
  );
}
