import { useState } from "react";
import PackageIcon from "../../assets/package_dark.svg?react";
import ModuleIcon from "../../assets/module_dark.svg?react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { ProjectInfo, type ProjectInfoData } from "../../ProjectInfo";

interface ProjectTecnologies {
  name: string;
}

const tecnologia: ProjectTecnologies[] = [
  {
    name: "frontEnd",
  },
  {
    name: "backEnd",
  },
  {
    name: "fullStack",
  },
];

const projetosFrontEnd: ProjectInfoData[] = [
  {
    annotation: [
      {
        name: "Stacks",
        parameters: [
          {
            name: "language",
            data: "typescript",
          },
          {
            name: "framework",
            data: "react",
            isFinal: true,
          },
        ],
      },
    ],
    image: "https://portfolio-ranper.vercel.app/assets/mensal-cMeIJS1Q.png",
    name: "ListaUsuários",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R",
        name: "ListaUsuários",
      },
      site: {
        link: "https://github.com/R4NP3R",
        name: "ListaUsuários",
      },
    },
  },
];

const projetosBackEnd: ProjectInfoData[] = [
  {
    annotation: [
      {
        name: "Stacks",
        parameters: [
          {
            name: "language",
            data: "typescript",
          },
          {
            name: "framework",
            data: "react",
            isFinal: true,
          },
        ],
      },
    ],
    image: "https://portfolio-ranper.vercel.app/assets/mensal-cMeIJS1Q.png",
    name: "ListaUsuários",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R",
        name: "ListaUsuários",
      },
      site: {
        link: "https://github.com/R4NP3R",
        name: "ListaUsuários",
      },
    },
  },
];

const projetosFull: ProjectInfoData[] = [];

export const Projects = () => {
  const [isActive, setIsActive] = useState("frontEnd");
  const [handleInformations, setHandleInformations] = useState(true);

  return (
    <section
      className="min-h-dvh pt-17 jetbrains bg-[#2B2D30] flex"
      id="projetos"
    >
      <div className="w-2/6 px-5">
        <p className="flex items-center cursor-pointer rounded-lg px-4 py-1 relative group">
          <span className="relative">
            {handleInformations ? (
              <SlArrowDown
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-25px] top-[-10px] text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            ) : (
              <SlArrowRight
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-25px] top-[-10px] text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            )}
          </span>
          <ModuleIcon className="w-8 h-8 mr-2" />
          <div className="flex justify-between w-full">
            <span className="text-2xl text-white font-bold">Estudos</span>
            <span className="text-2xl text-[#696F69] font-thin">C:\Life\</span>
          </div>
        </p>
        {handleInformations && (
          <ul className="pl-12">
            {tecnologia.map((item) => (
              <div onClick={() => setIsActive(item.name)}>
                {isActive === item.name ? (
                  <li className="flex items-center bg-[#2E436E] cursor-pointer rounded-lg px-4 py-1">
                    <PackageIcon className="w-8 h-8 mr-2" />
                    <p className="text-2xl text-white">{item.name}</p>
                  </li>
                ) : (
                  <li className="flex items-center hover:bg-[#43454A] cursor-pointer rounded-lg px-4 py-1">
                    <PackageIcon className="w-8 h-8 mr-2" />
                    <p className="text-2xl text-white">{item.name}</p>
                  </li>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
      {isActive === "frontEnd" && (
        <div className="w-full bg-[#1E1F22] grid grid-cols-2 gap-6 px-4 py-1">
          {projetosFrontEnd.map((projeto) => (
            <ProjectInfo projects={projeto} />
          ))}
        </div>
      )}
      {isActive === "backEnd" && (
        <div className="w-full bg-[#1E1F22] grid grid-cols-2 gap-6 px-4 py-1">
          {projetosBackEnd.map((projeto) => (
            <ProjectInfo projects={projeto} />
          ))}
        </div>
      )}
      {isActive === "fullStack" && (
        <div className="w-full bg-[#1E1F22] grid grid-cols-2 gap-6 px-4 py-1">
          <div>
            <span className="text-[#F96967]">
              Exception in thread "FullStack" java.lang.NullPointerException
            </span>
            <br/>
            <span className="text-[#F96967] ml-5">
              at life.projects.fullstack{"(null)"}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
