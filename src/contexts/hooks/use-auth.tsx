import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { toast } from 'react-toastify'

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('@token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setIsLoading(false)
  }, [])

  async function handleLogin({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    try {
      const { headers } = await api.post('/login', {
        email,
        senha: password,
      })
      const authorization = headers.authorization
      const [, token] = authorization.split(' ')
      if (!token) return
      localStorage.setItem('@token', JSON.stringify(token))
      localStorage.setItem('@email', email)
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
      const { data: user } = await api.get(`/user/email/${email}`)
      if (user.crm) {
        navigate('/medico')
      } else {
        navigate('/paciente')
      }
    } catch (err) {
      toast.warning('E-mail ou senha incorretos! Tente novamente')
      console.log(err)
    }
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('@token')
    localStorage.removeItem('@email')
    api.defaults.headers.Authorization = null
    navigate('/')
  }

  return { isLoading, authenticated, handleLogin, handleLogout }
}
