import { Sidebar } from "../components/Sidebar/Sidebar";

export function Admin() {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Atendimentos" />
      </div>
      <div className="col-span-10">
      </div>
    </div>
    </>
  )
}