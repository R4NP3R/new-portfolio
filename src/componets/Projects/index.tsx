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
          },
        ],
      },
    ],
    image: "https://portfolio-ranper.vercel.app/assets/Efood-Ca9rXEjA.png",
    name: "Efood",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R/efood",
        name: "efood",
      },
      site: {
        link: "https://efood-phi.vercel.app/",
        name: "efood",
      },
    },
  },
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
    image: "https://portfolio-ranper.vercel.app/assets/Eplay-Bm1uCszB.png",
    name: "Efood",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R/eplay",
        name: "eplay",
      },
      site: {
        link: "https://eplay-rho-five.vercel.app/",
        name: "eplay",
      },
    },
  },
  {
    annotation: [
      {
        name: "Stacks",
        parameters: [
          {
            name: "markupLanguage",
            data: "HTML",
          },
          {
            name: "language",
            data: "javascript",
            isFinal: true,
          },
        ],
      },
    ],
    image: "https://portfolio-ranper.vercel.app/assets/foodNow-B-QZdvyx.png",
    name: "freelaRestaurant",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R/freela_restaurant",
        name: "freelaRestaurant",
      },
      site: {
        link: "https://freela-restaurant.vercel.app/",
        name: "freelaRestaurant",
      },
    },
  },
  {
    annotation: [
      {
        name: "Stacks",
        parameters: [
          {
            name: "language",
            data: "javascript",
          },
          {
            name: "framework",
            data: "bootstrap",
            isFinal: true,
          },
        ],
      },
    ],
    image: "https://portfolio-ranper.vercel.app/assets/CSGranadas-Blk10CTQ.png",
    name: "CsgoNades",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R/Granadas-CSGO",
        name: "CSGONades",
      },
      site: {
        link: "https://granadas-csgo.vercel.app/",
        name: "CSGONades",
      },
    },
  },
  {
    annotation: [
      {
        name: "Stacks",
        parameters: [
          {
            name: "markupLanguage",
            data: "HTML",
          },
          {
            name: "style",
            data: "css",
            isFinal: true,
          },
        ],
      },
    ],
    image:
      "https://portfolio-ranper.vercel.app/assets/BreakingBad-3hjHuqN1.png",
    name: "BreakingBad",
    projectLinks: {
      github: {
        link: "https://github.com/R4NP3R/Breaking_Bad",
        name: "BreakinBad",
      },
      site: {
        link: "https://breaking-bad-azure.vercel.app/",
        name: "BreakinBad",
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
      className="min-h-dvh pt-17 b-10 jetbrains bg-linear-to-t from-[#2B2D30] from-95% to-[#282A36] flex"
      id="projetos"
    >
      <div className="w-2/6 px-5 bg-linear-to-b from-95% from-[#2B2D30] to-[#0D1117] ">
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
        <div className="w-full bg-linear-to-b from-[#1E1F22] from-95% to-[#0D1117] grid grid-cols-2 gap-6 px-4 py-1">
          {projetosFrontEnd.map((projeto) => (
            <ProjectInfo projects={projeto} />
          ))}
        </div>
      )}
      {isActive === "backEnd" && (
        <div className="w-full bg-linear-to-b from-[#1E1F22] from-95% to-[#0D1117] grid grid-cols-2 gap-6 px-4 py-1">
          <div>
            <span className="text-[#F96967]">
              Exception in thread "BackEnd" java.lang.NullPointerException
            </span>
            <br />
            <span className="text-[#F96967] ml-5">
              at life.projects.backend{"(null)"}
            </span>
          </div>
        </div>
      )}
      {isActive === "fullStack" && (
        <div className="w-full bg-linear-to-b from-[#1E1F22] from-95% to-[#0D1117] grid grid-cols-2 gap-6 px-4 py-1">
          <div>
            <span className="text-[#F96967]">
              Exception in thread "FullStack" java.lang.NullPointerException
            </span>
            <br />
            <span className="text-[#F96967] ml-5">
              at life.projects.fullstack{"(null)"}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
