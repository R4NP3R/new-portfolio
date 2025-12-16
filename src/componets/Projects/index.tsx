import { useState } from "react";
import PackageIcon from "../../assets/package_dark.svg?react";
import ModuleIcon from "../../assets/module_dark.svg?react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

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
    name: "FullStack",
  },
];

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
      <div className="w-full bg-[#1E1F22] grid grid-cols-2 gap-4 p-5">
        <div>
          <p className="text-lg">
            <span className="text-[#9E9C43]">@FrontEnd</span>
            <span className="text-[#B4B5B3]">{"("}</span>
            <span className="text-[#B4B5B3]">language = </span>
            <span className="text-[#69954C]">"typescript"</span>
            <span className="text-[#B4B5B3]">
              {")"} <br />
            </span>
            <span className="text-[#9E9C43]">
              @RequiredArgsConstructor <br />
            </span>
            <span className="text-[#CE8D59]">public project</span>
            <span className="text-[#B4B5B3]"> Macaco {"{"}</span>
          </p>
          <img
            src="https://portfolio-ranper.vercel.app/assets/mensal-cMeIJS1Q.png"
            alt=""
          />
          <div className="flex mt-2">
            <p className="pl-4 text-lg w-full relative group">
              <div className="bg-[#26282E] absolute h-full w-full z-[-1]"></div>
              <div className="static z-10">
                <span className="text-[#CE8D59]">private final </span>
                <a
                  href="#"
                  target="_blank"
                  className="text-[#B4B5B3] hover:underline"
                >
                  GithubRepository
                </a>
                <span className="text-[#C16E9C]"> macaco</span>
                <span className="text-[#B4B5B3]">{";"}</span>
              </div>
            </p>
          </div>
          <p>
            <span className="text-[#B4B5B3]">{"}"}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
