import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      type="submit"
      className="bg-blue-700 text-white h-14 w-full font-bold text-lg rounded-xl mt-5 hover:bg-blue-600 transition-all"
    >
      {children}
    </button>
  )
}
