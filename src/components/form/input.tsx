import { InputHTMLAttributes } from 'react'

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="min-w-max w-full h-14 my-2 px-4 rounded-xl border border-blue-500 disabled:border-blue-200 text-gray-500"
      {...rest}
    />
  )
}
