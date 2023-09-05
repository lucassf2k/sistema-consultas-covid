import { ReactNode } from 'react'

type GroupFieldsProps = {
  children: ReactNode
}

export function GroupFields({ children }: GroupFieldsProps) {
  return (
    <div className="w-full flex items-center justify-between space-x-4">
      {children}
    </div>
  )
}
