import { Header } from '../components/header'
import { Menu } from './menu.tsx'
import patientIMG from '../assets/homem-lindo.jpg'

export function Patient() {
  return (
    <div className="w-screen h-screen">
      <Header imageURL={patientIMG} name="Arthur do TG" />
      <Menu text="Realizar consulta ou Atualização" isDoctor={false} />
    </div>
  )
}
