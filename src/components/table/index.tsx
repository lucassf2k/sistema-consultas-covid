
type TableProps = {
  text: string
  isDoctor: boolean
}

export const Table = ({ text, isDoctor }:TableProps) => {
  return (
    <div className="flex flex-wrap">
      {text && (
        <div
          className="text-container"
          style={{
            width: '533px',
            height: '60px',
            top: '246px',
            left: '142px',
          }}
        >
          {text}
        </div>
      )}
      {isDoctor ?null : (
        <button
          className="button bg-blue-500 text-white rounded-lg ml-4"
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
      )}

    <div className="table-container">
      <table className="w-3/4 h-96 mx-auto rounded-lg border border-blue-500">
        <thead>
        <tr>
            <td className="px-4 py-2">Editar</td>
            <td className="px-4 py-2">Situação</td>
            <td className="px-4 py-2">{isDoctor ? "Paciente" : "Médico"}</td>
            <td className="px-4 py-2">03/10/2023</td>
          </tr>
        </thead>
        <tbody>
        <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">X</th>
            <th className="px-4 py-2">A realizar</th>
            <th className="px-4 py-2">Zacarias Peixoto</th>
            <th className="px-4 py-2">30/10/2023</th>
          </tr>
          <tr>
            <td className="px-4 py-2">?</td>
            <td className="px-4 py-2">Em análise</td>
            <td className="px-4 py-2">Zeca Tatu da Silva</td>
            <td className="px-4 py-2">22/07/2023</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Table;
