import { Header } from '../components/header'
import patientIMG from '../assets/homem-lindo.jpg'

export function Patient() {
  return (
    <div className="w-screen h-screen">
      <Header imageURL={patientIMG} name="Arthur do TG" />
    </div>
  )
}
