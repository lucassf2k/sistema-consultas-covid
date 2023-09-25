import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../components/form'
import { Title } from '../components/title'

import covidBG from '../assets/covid-bg.jpg'
import { User } from '../models/user'
import { api } from '../services/api'
import { Icons } from '../assets/icons'
import { toast } from 'react-toastify'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [crm, setCrm] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [isInputCrmDisabled, setIsInputCrmDisabled] = useState(true)
  const navigate = useNavigate()

  const handleIsToogleDisabledInputCrm = () => {
    setIsInputCrmDisabled((prevState) => !prevState)
  }

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const user: User = {
        email,
        senha,
        nome,
        cpf,
        crm: crm ? crm : '',
        nascimento,
      }
      console.log('user', user)
      await api.post('/user', user)
      toast.success('Cadastrado com sucesso!')
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-screen h-screen flex  justify-between">
      <section className="px-60 py-9 w-3/4 justify-items-center">
        <Title text="Cadastre-se" />
        <Form.Root>
          <Form.Input
            type="text"
            placeholder="Nome Completo"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNome(event.target.value)
            }
          />
          <Form.Input
            type="email"
            placeholder="E-mail"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <Form.Input
            type="password"
            placeholder="Senha"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSenha(event.target.value)
            }
          />
          <Form.GroupFields>
            <Form.Input
              type="text"
              placeholder="CPF"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setCpf(event.target.value)
              }
            />
            <Form.Input
              type="date"
              placeholder="Data de Nascimento"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setNascimento(event.target.value)
              }
            />
          </Form.GroupFields>
          <div className="w-full flex items-center">
            <span className="text-gray-600 mr-2">possui CRM? Se sim: </span>
            <button type="button" onClick={handleIsToogleDisabledInputCrm}>
              {isInputCrmDisabled ? (
                <Icons.LiaEyeSlash className="w-6 h-6" />
              ) : (
                <Icons.LiaEyeSolid className="w-6 h-6" />
              )}
            </button>
          </div>
          <Form.Input
            type="text"
            placeholder="CRM"
            disabled={isInputCrmDisabled}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCrm(event.target.value)
            }
          />
          <Form.Button type="submit" onClick={handleSignUp}>
            Cadastrar
          </Form.Button>
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
