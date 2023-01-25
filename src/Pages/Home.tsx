import { Sidebar } from "../components/Sidebar/Sidebar"

export function Home() {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Novo Atendimento" />
      </div>
      <div className="col-span-10 pl-16">
      </div>
    </div>
    </>
  )
}