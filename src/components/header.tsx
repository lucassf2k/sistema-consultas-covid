import { Link } from 'react-router-dom'
import { User } from './user'
import { useContext } from 'react'
import { Context } from '../contexts/auth-context'

type HeaderProps = {
  imageURL: string
  name: string
  crm: string
}

export function Header({ imageURL, name, crm }: HeaderProps) {
  const { handleLogout } = useContext(Context)
  const isDoctor = crm !== ''

  return (
    <header className="bg-blue-500 w-full flex items-center justify-between py-2 px-4 border-b-4 border-blue-500">
      <User.Root>
        <User.Image src={imageURL} height="h-20" width="w-20" />
        <User.Infos name={name} />
      </User.Root>
      <div className="w-[180px] flex items-center justify-evenly text-xl text-white font-bold">
      <Link to={isDoctor ? "/medico/profile" : "/paciente/profile"}>Perfil</Link>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-none border-none"
        >
          Sair
        </button>
      </div>
    </header>
  )
}
