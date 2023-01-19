import { useEffect, useState } from "react";
import { servicesApi } from "../services/api/services";

interface Service {
  id: string
  name: string
  value: number
  duration: number
  imagem?: string
}

export function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [filter, setFilter] = useState('')

  async function getServices() {
    const services = await servicesApi.index()
    setServices(services.data)
  }
  
  useEffect(() => {
    getServices()
  }, [])

  return (
    <div className="py-16">
      <h1 className="text-2xl font-medium uppercase text-center mb-4">Serviços</h1>
      <p className="text-lg text-center mb-8">Confira abaixo os serviços que oferecemos.</p>
      <div className="flex items-center justify-center mt-4">
          <div className="w-1/4">
            <input 
              className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
              type="text" 
              placeholder="Search services..."
              value={filter}
              onInput={(e) => setFilter(e.target.value)}
            />
          </div>
        <div className="w-1/4 pl-16">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">Novo</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-14 m-20 text-center">
        {
          services.filter(service => service.name.toLowerCase().includes(filter.toLowerCase())).map(service => (
            <div key={service.id} className="flex flex-col col-span-1 min-w-64 max-w-md mx-auto items-center brightness-75 hover:opacity-90 cursor-pointer">
              <img 
                src={`
                  ${service.imagem ? service.imagem : "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                `} 
                alt={service.duration} 
                className="w-full rounded-md"
              />
              <h2 className="text-lg font-medium mt-2">{service.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}
