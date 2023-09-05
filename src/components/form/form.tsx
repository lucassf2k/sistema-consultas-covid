import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Root({ children }: ContainerProps) {
  return (
    <form className={`w-full flex flex-col items-center justify-center`}>
      {children}
    </form>
  )
}
