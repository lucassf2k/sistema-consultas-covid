import { ChangeEvent, FormEvent, useState } from 'react'
import { Form } from '../form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

type ModalRegisterConsultaProps = {
  isOpen: boolean
}

export function ModalRegisterConsulta({ isOpen }: ModalRegisterConsultaProps) {
  const [local, setLocal] = useState('')
  const [cpfMedico, setCpfMedico] = useState('')
  const [dataHorario, setDataHoratio] = useState('')
  if (!isOpen) return null

  const handleCreatAConsulta = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const consulta = {
        local,
        cpfMedico,
        dataHorario,
      }
      await api.post('/consulta', consulta)
      toast.success('Consulta cadastrada com sucesso!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-3/4 m-auto bg-slate-200 p-4 rounded-lg">
      <Form.Root>
        <Form.Input
          type="text"
          placeholder="Local da consulta"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setLocal(event.target.value)
          }
        />
        <Form.Input
          type="text"
          placeholder="CPF do Médico"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCpfMedico(event.target.value)
          }
        />
        <Form.Input
          type="text"
          placeholder="yyyy-MM-dd HH:mm"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDataHoratio(event.target.value)
          }
        />
        <Form.Button type="submit" onClick={handleCreatAConsulta}>
          Cadastrar
        </Form.Button>
      </Form.Root>
    </div>
  )
}
