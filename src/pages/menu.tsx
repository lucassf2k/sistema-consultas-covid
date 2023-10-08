import { Table } from '../components/table/index.tsx';

type MenuProps = {
  text: string;
  isDoctor: boolean;
};

export const Menu = ({ text, isDoctor }: MenuProps) => {
  return (
    <div className="w-screen h-screen">
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
          {isDoctor ? (
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
          <Table isDoctor={false} />
        </div>
      </div>
    </div>
  );
};

