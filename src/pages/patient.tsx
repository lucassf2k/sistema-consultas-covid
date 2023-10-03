import { Header } from '../components/header'
import patientIMG from '../assets/homem-lindo.jpg'
import { Table } from '../components/table/index.tsx'

export function Patient() {
  return (
    <div className="w-screen h-screen">
      <Header imageURL={patientIMG} name="Arthur do TG" />
      <Table text="Realizar consulta ou Atualização" isDoctor={false} />
    </div>
  )
}
