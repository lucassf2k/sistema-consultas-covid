import { Header } from '../components/header'
import patientIMG from '../assets/homem-lindo.jpg'
import { Table } from '../components/table/index.tsx'
import { useEffect, useState } from 'react'
import { api } from '../services/api.tsx'

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

  useEffect(() => {
    loadConsultas()
  }, [])

  return (
    <div className="w-screen h-screen">
      <Header imageURL={patientIMG} name="Arthur do TG" />
      <Table
        text="Realizar consulta ou Atualização"
        isDoctor={false}
        consultas={consultas}
      />
    </div>
  )
}
