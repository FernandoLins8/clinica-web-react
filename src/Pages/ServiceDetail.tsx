import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Service } from "./Services";

export function ServiceDetail() {
  const location = useLocation();
  const service: Service = location.state
  const navigate = useNavigate()
  
  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen h-full">
        <Sidebar activeSidebarItem="Serviços" />
      </div>
      <div className="py-16 col-span-10 relative">
        <button onClick={handleGoBack} className="absolute cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <h1 className="text-2xl font-medium uppercase text-center mb-4">Serviços</h1>
        <p className="text-lg text-center mb-8">Confira abaixo o serviço de  <strong>{service.name}</strong>.</p>
        <div className="grid-cols-2 gap-y-14 m-20 text-center">
          <div className="flex justify-between min-w-64 max-w-5xl mx-auto brightness-75">
            <div className="w-1/2">
              <img 
                src={`
                  ${service.imagem ? service.imagem : "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                `} 
                alt={String(service.duration)}
                className="rounded-md"
              />
            </div>
            <div className="w-1/2 px-4 flex flex-col justify-between pb-8">
              <div className="flex flex-col justify-start items-start gap-2">
                <h2 className="block text-xl font-medium mt-2">{service.name}</h2>
                <span>{`${service.duration} min`}</span>
                <span>{`R$ ${service.value}`}</span>
              </div>
              <p className="text-left text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis doloremque, dicta quis quisquam ea minima earum fugit ad voluptatem inventore eaque nam vel dignissimos?</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 grid-cols-2">
          <button className="block w-24 h-10 py-2 text-center bg-indigo-400 hover:bg-indigo-500 text-white font-medium rounded-lg">Editar</button>
          <button className="block w-24 h-10 py-2 text-center bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg">Excluir</button>
        </div>
      </div>
    </div>
  )
}
