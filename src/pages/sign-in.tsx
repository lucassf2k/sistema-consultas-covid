import { Title } from '../components/title'
import { Form } from '../components/form'
import { Link } from 'react-router-dom'
import covidBG from '../assets/covid-bg.jpg'

export function SingIn() {
  return (
    <div className="w-screen h-screen flex items-center justify-between">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <Title text="Bem vindo" />
        <main className="w-1/2 flex flex-col items-center justify-center">
          <Form.Root>
            <Form.Input type="text" placeholder="E-mail" />
            <Form.Input type="password" placeholder="Senha" />
            <span className="w-full text-sm mb-2">
              Esqueceu sua senha?{' '}
              <Link to="/sign-up" className="text-blue-400">
                clique aqui
              </Link>
            </span>
            <Form.Button>Logar</Form.Button>
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
