import { Link } from "react-router-dom";
import Table from "../components/table/index.tsx";

export const DadosMedico = () => {

  return (
    <div>
      {/* Divisão em parte superior e inferior*/}
      <div className="flex flex-col md:flex-row">
        {/* Parte Superior Esquerda */}
        <div className="md:w-1/2 p-4 space-y-4">
          <div className="flex">
            {/*Botão de Voltar*/}
            <div
              className="bg-blue-500 rounded-full p-2 cursor-pointer">
              <Link to="/profile">&larr;</Link>
            </div>
            <div className="text-wrapper-5 text-blue-500 text-2xl font-bold mt-2 ml-2">Seus Dados</div>
          </div>

          {/*Input Nome*/}
          <div className="overlap-group-wrapper">
            <div className="overlap-group border border-blue-500 rounded-md p-2">
              <div className="text-wrapper-4 text-gray-700">Nome Completo</div>
            </div>
          </div>
          {/*Input CPF*/}
          <div className="overlap-group-wrapper">
            <div className="overlap-group border border-blue-500 rounded-md p-2">
              <div className="text-wrapper text-gray-700">CPF</div>
            </div>
          </div>
          {/*Input Data de Nascimento*/}
          <div className="input-2">
            <div className="input-3">
              <div className="overlap-group-2 border border-blue-500 rounded-md p-2">
                <div className="text-wrapper-2 text-gray-700">Data de nascimento</div>
              </div>
            </div>
          </div>
          {/* Input E-mail */}
          <div className="overlap-group-wrapper">
            <div className="overlap-group border border-blue-500 rounded-md p-2">
              <div className="text-wrapper-3 text-gray-700">E-mail</div>
            </div>
          </div>
        </div>

        {/* Parte Superior Direita */}
        <div className="md:w-1/2 p-4">
          {/* Foto de Perfil*/}
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden w-32 h-32">
              <img className="w-full h-full object-cover" alt="vasco" src="vasco.png" />
            </div>
            {/* Botão para Mudar Foto de Perfil */}
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
                Mudar Foto de Perfil
              </button>
            </div>
          </div>

          {/* Dados de Senha */}
          <div className="input p-4 space-y-4 mt-4">
            <div className="overlap-group-wrapper">
              <div className="overlap-group border border-blue-500 rounded-md p-2">
                <div className="text-wrapper text-gray-700">Senha</div>
              </div>
            </div>
            {/* Input Confirmar Senha */}
            <div className="input-wrapper">
              <div className="overlap-group border border-blue-500 rounded-md p-2">
                <div className="text-wrapper text-gray-700">Confirme senha</div>
              </div>
            </div>
            {/* Botão para Mudar Senha */}
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
                Mudar Senha
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Parte Inferior*/}
      <div className="md:w-full p-4">
          <div className="bg-white border border-blue-500 rounded-lg p-4">
            <div className="text-blue-500 text-2xl font-bold mb-4 text-center">Suas Consultas</div>
            <Table isDoctor={false} />
          </div>
      </div>
    </div>
  );
};

export default DadosMedico;
