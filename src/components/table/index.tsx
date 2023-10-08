
type TableProps = {
  isDoctor: boolean
}

export const Table = ({isDoctor }:TableProps) => {
  return (
    <div className="flex flex-col mx-8 border-solid">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light border-2 border-blue-500 rounded-lg">
        <thead className="border-b-2 font-medium border-blue-500">
          <tr>
            <th scope="col" className="px-6 py-4">Editar</th>
            <th scope="col" className="px-6 py-4">Situação</th>
            <th scope="col" className="px-6 py-4">{isDoctor ? "Médico" : "Paciente"}</th>
            <th scope="col" className="px-6 py-4">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 font-medium border-r-2 border-b-2 border-blue-500">1</td>
            <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">A realizar</td>
            <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">Zacarias Peixoto</td>
            <td className="whitespace-nowrap px-6 py-4 border-b-2 border-blue-500">30/10/2023</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 font-medium border-r-2 border-b-2 border-blue-500">2</td>
            <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">Em análise</td>
            <td className="whitespace-nowrap px-6 py-4 border-r-2 border-b-2 border-blue-500">Zeca Tatu da Silva</td>
            <td className="whitespace-nowrap px-6 py-4 border-b-2 border-blue-500">22/07/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
  );
}

export default Table;
