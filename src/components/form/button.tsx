import { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  type: 'submit' | 'button'
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-700 text-white h-14 w-full font-bold text-lg rounded-xl mt-5 hover:bg-blue-600 transition-all"
    >
      {children}
    </button>
  )
}
