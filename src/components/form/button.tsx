import { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-blue-700 text-white h-14 w-full font-bold text-lg rounded-xl mt-5 hover:bg-blue-600 transition-all"
    >
      {children}
    </button>
  )
}
