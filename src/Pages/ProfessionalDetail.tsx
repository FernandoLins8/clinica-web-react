import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useAuth } from "../contexts/auth";
import { professionalsApi } from "../services/api/professionals";
import { Professional } from "./Professionals";

export function ProfessionalDetail() {
  const location = useLocation()
  const professional: Professional = location.state

  const { user } = useAuth()
  const navigate = useNavigate()
  
  function handleGoBack() {
    navigate(-1)
  }

  async function handleDelete() {
    const res = await professionalsApi.delete(professional.id)

    if(res.status !== 204) {
      alert('Houve um problema durante a remoção no Profissional')
      return
    }
    
    alert('Profissional deletado com sucesso')
    navigate(-1)
  }
  
  return (
    <div className="grid grid-cols-12">
    <div className="col-span-2 min-h-screen h-full">
      <Sidebar activeSidebarItem="Profissionais" />
    </div>
    <div className="py-16 col-span-10 relative">
      <button onClick={handleGoBack} className="absolute cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </button>
      <h1 className="text-2xl font-medium uppercase text-center mb-4">Profissional</h1>
      <p className="text-lg text-center mb-8">Confira abaixo sobre o profissional <strong>{professional.name}</strong>.</p>
      <div className="grid-cols-2 gap-y-14 m-20 text-center">
        <div className="flex justify-between min-w-64 max-w-5xl mx-auto brightness-75">
          <div className="w-1/2">
            <img 
              src={`
                ${professional.imageUrl ? professional.imageUrl : "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              `} 
              alt={String(professional.name)}
              className="rounded-md"
            />
          </div>
          <div className="w-1/2 px-4 flex flex-col justify-between pb-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <h2 className="block text-xl font-medium mt-2">{professional.name}</h2>
              {/* <span>{`${professional.duration} min`}</span> */}
              <span>{`Comissão: ${professional.commission}`}%</span>
            </div>
            <p className="text-left text-lg">{professional.description}</p>
          </div>
        </div>
      </div>
      {
        user?.role == 'admin' && (
          <div className="flex justify-center gap-2 grid-cols-2">
            <button 
              onClick={handleDelete}
              className="block w-24 h-10 py-2 text-center bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg"
            >
              Excluir
            </button>
          </div>
        )
      }
    </div>
  </div>
  )
}