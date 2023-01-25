import { Sidebar } from "../components/Sidebar/Sidebar";

export function NewAppointment() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Novo Atendimento" />
      </div>
      <div className="py-16 col-span-10">
        <h1 className="text-2xl font-medium uppercase text-center mb-4">Novo Atendimento</h1>
        <p className="text-lg text-center mb-8">Personalize seu atendimento abaixo. Após submissão um funcionário irá entrar em contato para que possemos iniciar.</p>
        <div className="grid grid-cols-2 gap-y-14 m-20 text-center">
        </div>
      </div>
    </div>
  )
}