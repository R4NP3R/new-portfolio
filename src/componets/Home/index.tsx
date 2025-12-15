import { ImportInfo } from "../ImportInfo";
import { ObjectInfo, type ObjectInfoParams } from "../ObjectInfo";

const infomations: ObjectInfoParams = {
  name: "Rafael",
  interfaceName: "informações",
  isArray: true,
  objectLineData: [
    {
      isObject: false,
      objectLineInfo: [
        {
          name: "nome",
          data: "Rafael",
        },
        {
          name: "idade",
          data: 21,
        },
        {
          name: "cargo",
          data: "Desenvolvedor Web",
        },
        {
          name: "descrição",
          data: "Olá, sou Rafael Silva Santos, desenvolvedor apaixonado por tecnologia e por criar soluções que unem funcionalidade, desempenho e boas práticas de desenvolvimento. Estou em constante evolução, sempre buscando aprender e aplicar novos conhecimentos em projetos reais.",
          isFinal: true,
        },
      ],
    },
  ],
};

const stacks: ObjectInfoParams = {
  name: "experiências",
  interfaceName: "stacks",
  isArray: true,
  objectLineData: [
    {
      isObject: true,
      objectName: "frontEnd",
      objectLineInfo: [
        {
          name: "language",
          data: "TypeScript",
          isFinal: true,
        },
        {
          name: "framework",
          data: "React",
          isFinal: true,
        },
        {
          name: "CSS-framework",
          data: "tailwindcss",
          isFinal: true,
        },
      ],
    },
    {
      isObject: true,
      objectName: "backEnd",
      objectLineInfo: [
        {
          name: "language",
          data: "Java",
          isFinal: true,
        },
        {
          name: "framework",
          data: "SpringBoot",
          isFinal: true,
        },
        {
          name: "database",
          data: "SQL Server",
          isFinal: true,
        },
      ],
    },
    {
      isObject: true,
      objectName: "tools",
      objectLineInfo: [
        {
          name: "docker",
          data: true,
          isFinal: true,
        },
      ],
    },
  ],
};

export const Home = () => {
  return (
    <div className="bg-linear-to-b from-[#282A36] from-95% to-[#2B2D30]">
      <div className="flex flex-col my-container min-h-dvh cascadia" id="home">
        <div className="mb-20 mt-20">
          <ImportInfo
            type="import type"
            importName="Informações"
            path="../../vida"
          />
          <ImportInfo
            type="import type"
            importName="Stacks"
            path="../../estudos"
          />
        </div>
        <ObjectInfo
          name={infomations.name}
          interfaceName={infomations.interfaceName}
          objectLineData={infomations.objectLineData}
          isArray={infomations.isArray}
        />
        <ObjectInfo
          name={stacks.name}
          interfaceName={stacks.interfaceName}
          objectLineData={stacks.objectLineData}
          isArray={stacks.isArray}
        />
      </div>
    </div>
  );
};
