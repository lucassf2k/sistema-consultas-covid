import { Title } from '../components/title'
import { Form } from '../components/form'
import { Link } from 'react-router-dom'
import covidBG from '../assets/covid-bg.jpg'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Context } from '../contexts/auth-context'
import { toast } from 'react-toastify'

export function SingIn() {
  const { handleLogin } = useContext(Context)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault()
    if (!email || !pass) {
      toast.info('A senha ou email não pode ser vázio!')
      return
    }
    if (pass.length < 6) {
      toast.info('Senha deve ter no mínimo 6 caracteres')
      return
    }
    handleLogin({ email, password: pass })
  }

  return (
    <div className="w-screen h-screen flex items-center justify-between">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <Title text="Bem vindo" />
        <main className="w-1/2 flex flex-col items-center justify-center">
          <Form.Root>
            <Form.Input
              type="text"
              placeholder="E-mail"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <Form.Input
              type="password"
              placeholder="Senha"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPass(event.target.value)
              }
            />
            <span className="w-full text-sm mb-2">
              Esqueceu sua senha?{' '}
              <Link to="/sign-up" className="text-blue-400">
                clique aqui
              </Link>
            </span>
            <Form.Button type="submit" onClick={handleSignIn}>
              Logar
            </Form.Button>
          </Form.Root>
        </main>
      </section>
      <section className="h-full">
        <img
          src={covidBG}
          alt="Imagem de ilustrativa do covid"
          className="h-screen"
        />
      </section>
    </div>
  )
}
