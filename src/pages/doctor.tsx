import { Header } from '../components/header'
import doctorIMG from '../assets/medico-urologista.jpeg'
import {Table} from '../components/table/index.tsx'

export function Doctor() {
  return (
    <div className="w-screen h-screen">
      <Header imageURL={doctorIMG} name="Doutor Paulo" />
      <Table text="Atendimentos Pendentes" isDoctor={true} />
    </div>
  )
}
