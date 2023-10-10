import { Link } from "react-router-dom";
import { Table } from "../components/table/index.tsx";
import { useEffect, useState } from 'react'
import { api } from '../services/api.tsx'
import { User } from '../models/user.ts'
import { Consultas } from "../models/consultas.ts";

export const DadosMedico = () => {
    const [user, setUser] = useState<User>({} as User)

  async function loadUser() {
    const email = localStorage.getItem("@email")
    try {
      const {data} = await api.get(`user/email/${email}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  const [consultas, setConsultas] = useState<Consultas[]>([] as Consultas[])

  const loadConsultas = async () => {
    try {
      const { data } = await api.get('/consulta')
      setConsultas(data)
    } catch (err) {
      console.log(err)
    }
  }

  const userEmail = localStorage.getItem("@email")

  const filteredAppointment = 
    consultas &&
    consultas.filter((appointments) => {
      console.log(appointments.paciente?.email)
      console.log(userEmail)
      return appointments.paciente?.email === userEmail
    })

  console.log(filteredAppointment)

  useEffect(() => {
    loadUser()
    loadConsultas()
  }, [])

  const isDoctor = user.crm !== ''

  return (
    <div className="bg-gray-100 min-h-screen">
        
        <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex">
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md absolute top-4 left-4">
                <Link to={isDoctor ? "/medico" : "/paciente"}>Voltar</Link>
            </div>
            {/* <!-- Informações do Usuário à Esquerda --> */}
            <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Seu Perfil</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Nome:</label>
                <p className="text-gray-800">{user.nome}</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email:</label>
                <p className="text-gray-800">{user.email}</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">CPF:</label>
                <p className="text-gray-800">{user.cpf}</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Data de Nascimento:</label>
                <p className="text-gray-800">{user.nascimento}</p>
            </div>
            </div>
            {/* <!-- Espaço para Tabela à Direita --> */}
            <div className="w-2/3 ml-6">
                <Table text='' isDoctor={isDoctor} isProfile={true} consultas={isDoctor ? consultas : filteredAppointment} />
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-blue-500 h-8"></div>
    </div>
  );
};

export default DadosMedico;