import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div className="w-[380px] flex items-center justify-between">
      {children}
    </div>
  )
}
