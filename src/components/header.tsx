import { Link } from 'react-router-dom'
import { User } from './user'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-2 px-4 border-b-4 border-blue-500">
      <User.Root>
        <User.Image height="h-20" width="w-20" />
        <User.Infos name="Arthur do TG" />
      </User.Root>
      <div className="w-[180px] flex items-center justify-evenly text-xl text-blue-400 font-bold">
        <Link to="">Perfil</Link>
        <Link to="">Sair</Link>
      </div>
    </header>
  )
}
