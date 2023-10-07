
type TableProps = {
  text: string
  isDoctor: boolean
}

export const Table = ({ text, isDoctor }:TableProps) => {
  return (
    <div className="">
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
      {isDoctor ?(
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
      ) : null}
    </div>
    <div className="flex flex-col mx-8 border-solid">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light border-2 border-blue-500 rounded-lg">
        <thead className="border-b-2 font-medium border-blue-500">
          <tr>
            <th scope="col" className="px-6 py-4">Editar</th>
            <th scope="col" className="px-6 py-4">Situação</th>
            <th scope="col" className="px-6 py-4">Paciente</th>
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

    </div>
  );
}

export default Table;
