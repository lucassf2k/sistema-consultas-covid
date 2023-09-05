import { Form } from '../components/form'
import { Title } from '../components/title'

import covidBG from '../assets/covid-bg.jpg'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <div className="w-screen h-screen flex  justify-between">
      <section className="px-60 py-9 w-3/4 justify-items-center">
        <Title text="Cadastre-se" />
        <Form.Root>
          <Form.Input type="text" placeholder="Nome Completo" />
          <Form.Input type="email" placeholder="E-mail" />
          <Form.Input type="password" placeholder="Senha" />
          <Form.Input type="password" placeholder="Repetir Senha" />
          <Form.GroupFields>
            <Form.Input type="text" placeholder="CPF" />
            <Form.Input type="date" placeholder="Data de Nascimento" />
          </Form.GroupFields>
          <Form.Button>Cadastrar</Form.Button>
          <span className="mt-6">
            Já possui uma conta?{' '}
            <Link to="/" className="text-blue-400">
              fazer log-in
            </Link>
          </span>
        </Form.Root>
      </section>
      <section className="h-screen">
        <img
          src={covidBG}
          alt="Representação do Covid-19"
          className="h-screen"
        />
      </section>
    </div>
  )
}
