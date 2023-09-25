import { ReactNode, useContext } from 'react'
import { Context } from '../../contexts/auth-context'
import { Navigate } from 'react-router-dom'
import { Loader } from '../Loader'

type PrivateRouteProps = {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isLoading, authenticated } = useContext(Context)
  if (isLoading) return <Loader isLoading />
  if (!authenticated) return <Navigate to="/" replace />
  return children
}
