import { Consultas } from '../../models/consultas'
import { transformarFormatoDataHora } from '../../services/formated-date-hours'
import { ModalRegisterConsulta } from '../modal-register-cosulta'
import { Title } from '../title'

type TableProps = {
  text: string
  isDoctor: boolean
  consultas?: Consultas[]
}

export const Table = ({ text, isDoctor, consultas }: TableProps) => {
  const email = localStorage.getItem('@email')
  const consultasFilteredByDoctor =
    consultas && consultas.filter((consulta) => consulta.medico.email === email)

  return (
    <div className="">
      {isDoctor && <Title text="Cadastrar nova consulta" />}
      {isDoctor && <ModalRegisterConsulta isOpen />}
      <div className="flex my-8 items-center">
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
                      Paciente
                    </th>
                    <th scope="col" className="px-6 py-4">
                      E-mail paciente
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {consultasFilteredByDoctor &&
                    consultasFilteredByDoctor.map((consulta) => (
                      <tr key={consulta.id}>
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
                        <td className="whitespace-nowrap px-6 py-4 border-b-2 border-blue-500">
                          {transformarFormatoDataHora(consulta.dataHorario)}
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
