import { Header } from '../components/header'
import doctorIMG from '../assets/medico-urologista.jpeg'

export function Doctor() {
  return (
    <div className="w-screen h-screen">
      <Header imageURL={doctorIMG} name="Doutor Paulo" />
    </div>
  )
}
