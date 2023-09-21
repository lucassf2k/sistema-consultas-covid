import { ReactNode, createContext } from 'react'
import { useAuth } from './hooks/use-auth'

type DefaultValueType = {
  authenticated: boolean
  handleLogin: ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => Promise<void>
  handleLogout: () => void
  isLoading: boolean
}
const defaultValue = {} as DefaultValueType
const Context = createContext(defaultValue)
type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, handleLogin, handleLogout, isLoading } = useAuth()
  return (
    <Context.Provider
      value={{ authenticated, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </Context.Provider>
  )
}

export { AuthProvider, Context }
