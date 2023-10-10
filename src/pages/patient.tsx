import { Header } from '../components/header'
import patientIMG from '../assets/profile-icon.jpg'
import { Table } from '../components/table/index.tsx'
import { useEffect, useState } from 'react'
import { api } from '../services/api.tsx'
import { User } from '../models/user.ts'

export function Patient() {
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

  return (
    <div className="w-screen h-screen">
      <Header imageURL={patientIMG} name={user.nome} crm='' />
      <Table
        text="Realizar consulta ou Atualização"
        isDoctor={false}
        consultas={consultas}
      />
      <div className="absolute bottom-0 left-0 w-full bg-blue-500 h-8"></div>
    </div>
  )
}
