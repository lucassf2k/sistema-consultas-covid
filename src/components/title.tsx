type titleProps = {
  text: string
}

export function Title({ text }: titleProps) {
  return <h1 className="text-blue-400 text-5xl mb-6 font-bold">{text}</h1>
}
