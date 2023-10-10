type InfosProps = {
  name: string
}

export function Infos({ name }: InfosProps) {
  return <p className="text-xl text-white font-bold">Bem vindo, {name}</p>
}
