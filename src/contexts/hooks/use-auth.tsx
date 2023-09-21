import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

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

      navigate('/home')
    } catch (err) {
      alert('E-mail ou senha incorretas')
      console.log(err)
    }
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('@token')
    localStorage.removeItem('@email')
    api.defaults.headers.Authorization = null
    navigate('/signin')
  }

  return { isLoading, authenticated, handleLogin, handleLogout }
}
