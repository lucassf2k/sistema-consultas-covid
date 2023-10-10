import { Header } from '../components/header'
import doctorIMG from '../assets/profile-icon.jpg'
import { Table } from '../components/table/index.tsx'
import { useEffect, useState } from 'react'
import { api } from '../services/api.tsx'
import { ModalRegisterConsulta } from '../components/modal-register-cosulta'
import { Title } from '../components/title.tsx'
import { User } from '../models/user.ts'

export function Doctor() {
  const [consultas, setConsultas] = useState([])

  const loadConsultas = async () => {
    try {
      const { data } = await api.get('/consulta')
      setConsultas(data)
    } catch (err) {
      console.log(err)
    }
  }

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

  useEffect(() => {
    loadConsultas()
    loadUser()
  }, [])

  const isDoctor = user.crm !== ''

  return (
    <div className="w-screen h-screen">
      <Header imageURL={doctorIMG} name={user.nome} crm={user.crm} />
      <Table
        text="Atendimentos Pendentes"
        isDoctor={true}
        consultas={consultas}
      />
      {isDoctor && <Title text="Cadastrar nova consulta" />}
      {isDoctor && <ModalRegisterConsulta isOpen />}
      <div className="mt-10 bottom-0 left-0 w-full bg-blue-500 h-8"></div>
    </div>
  )
}
