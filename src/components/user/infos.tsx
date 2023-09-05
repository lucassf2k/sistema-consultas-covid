type InfosProps = {
  name: string
}

export function Infos({ name }: InfosProps) {
  return <p className="text-xl text-blue-400 font-bold">Bem vindo, {name}</p>
}
