import { toast } from 'react-toastify'
import { Consultas } from '../../models/consultas'
import { api } from '../../services/api'
import { transformarFormatoDataHora } from '../../services/formated-date-hours'
import { useEffect, useState } from 'react'

type TableProps = {
  text: string
  isDoctor: boolean
  isProfile?: boolean
  consultas?: Consultas[]
}

export const Table = ({ text, isDoctor, isProfile=false, consultas }: TableProps) => {
  let consultasFilteredByDoctor
  let consultasFilteredByPatient

  if (isDoctor) {
    const email = localStorage.getItem('@email')
    consultasFilteredByDoctor =
      consultas &&
      consultas.filter((consulta) => consulta.medico.email === email)
  }
  else if(!isDoctor && !isProfile){
    consultasFilteredByPatient = 
      consultas &&
      consultas.filter((consulta) => consulta.paciente === null)
  }
  else if(!isDoctor && isProfile){
    consultasFilteredByPatient = consultas
  }

  const handleMakeAppointment = async ({ id }: { id: number }) => {
    try {
      const cpfPaciente = prompt('Seu CPF: ')
      await api.patch('/consulta', { id, cpfPaciente })
      toast.success('Consulta marcada com sucesso!')
    } catch (err) {
      console.log(err)
    }
  }

  const handleCancelAppointment = async ({ id }: {id: number}) => {
    try{
      await api.delete(`/consulta/${id}`)
      toast.success('Consulta cancelada com sucesso!')
    } catch(err){
      console.log(err)
    }
  }

  const [concluded, setConcluded] = useState(false)
  const handleConcluded = () => {
    setConcluded(true)
    localStorage.setItem("@concluded", "true") 
    toast.success('Consulta concluída com sucesso!')
  }

  useEffect(() => {
    setConcluded(Boolean(localStorage.getItem('@concluded')))
  }, [])

  return (
    <div className="">
      <div className="flex my-8 items-center text-center">
        {text && (
          <div
            className="text-container m-auto"
            style={{
              width: '533px',
              height: '60px',
              top: '246px',
              left: '142px',
            }}
          >
            <span className="font-poppins text-3xl font-semibold leading-15 tracking-normal text-left text-blue-500">
              {text}
            </span>
          </div>
        )}
        {/* {isDoctor ? (
          <button
            className="button bg-blue-500 text-white rounded-lg ml-4 m-auto"
            style={{
              width: '417px',
              height: '70px',
              top: '233px',
              left: '850px',
            }}
          >
            <span className="font-inter font-bold text-lg">
              Realizar Atendimento
            </span>
          </button>
        ) : null} */}
      </div>
      <div className="flex flex-col mx-8 border-solid mt-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light border-2 border-blue-500 rounded-lg">
                <thead className="border-b-2 font-medium border-blue-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Local
                    </th>
                    <th scope="col" className="px-6 py-4">
                      {!isDoctor ? 'Médico' : 'Paciente'}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      {!isDoctor ? 'E-mail do médico' : 'E-mail do paciente'}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isDoctor &&
                    consultasFilteredByDoctor &&
                    consultasFilteredByDoctor.map((consulta) => (
                      <tr
                        key={consulta.id}
                        className={`${(consulta.paciente ? (concluded ? 'bg-green-300' : 'bg-blue-300') : '')}`}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-r-2 border-b-2 border-blue-500">
                          {consulta.local}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {consulta.paciente
                            ? consulta.paciente.nome
                            : 'Sem paciente'}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {consulta.paciente
                            ? consulta.paciente.email
                            : 'Sem paciente'}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {transformarFormatoDataHora(consulta.dataHorario)}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500'>
                          <button
                            className='disable:opacity-30'
                            disabled={!Boolean(consulta.paciente)}
                            onClick={() => {handleConcluded()}}
                          >
                            Concluida
                          </button>
                        </td>
                      </tr>
                    ))}
                  {!isDoctor &&
                    consultasFilteredByPatient &&
                    consultasFilteredByPatient.map((consulta) => (
                      <tr
                        key={consulta.id}
                        className={`${consulta.paciente && 'bg-blue-300'}`}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium border-r-2 border-b-2 border-blue-500">
                          {consulta.local}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {consulta.medico.nome}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {consulta.medico.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          {transformarFormatoDataHora(consulta.dataHorario)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">
                          <button
                            className="disabled:opacity-30"
                            disabled={Boolean(consulta.paciente)}
                            onClick={() =>
                              handleMakeAppointment({
                                id: consulta.id,
                              })
                            }
                          >
                            Marcar
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-b-2 border-blue-500">
                          <button
                            onClick={() =>
                              handleCancelAppointment({
                                id: consulta.id,
                              })
                            }
                          >
                            Cancelar
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Table
