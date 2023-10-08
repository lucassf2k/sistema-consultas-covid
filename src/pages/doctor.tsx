import { Header } from '../components/header'
import doctorIMG from '../assets/medico-urologista.jpeg'
import { Table } from '../components/table/index.tsx'
import { useEffect, useState } from 'react'
import { api } from '../services/api.tsx'
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

  useEffect(() => {
    loadConsultas()
  }, [])

  return (
    <div className="w-screen h-screen">
      <Header imageURL={doctorIMG} name="Doutor Paulo" />
      <Table
        text="Atendimentos Pendentes"
        isDoctor={true}
        consultas={consultas}
      />
    </div>
  )
}
