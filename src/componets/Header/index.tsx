import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaReact } from "react-icons/fa";
import Package from "../../assets/package_dark.svg?react";
import type { IconType } from "react-icons";

interface iconProps {
  url: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: string;
  width: number;
}

export interface navigationLinks {
  link: string;
  name: string;
  icon: iconProps;
}

const navigationLinks: navigationLinks[] = [
  {
    link: "#home",
    name: "inicio",
    icon: {
      url: FaReact,
      width: 24,
      color: "#116CA1",
    },
  },
  {
    link: "#projetos",
    name: "projetos",
    icon: {
      url: Package,
      width: 24,
      color: "#116CA1",
    },
  },
  {
    link: "#",
    name: "contato",
    icon: {
      url: FaReact,
      width: 24,
      color: "#116CA1",
    },
  },
];

export const Header = () => {
  const [activeOption, setActiveOption] = useState("inicio");

  return (
    <header className="w-full border-b-[0.1px] border-[#44475A] fixed bg-[#282A36] cascadia">
      <div className="flex my-container relative">
        <div className="w-full flex text-2xl text-[#F8F8F2] py-4">
          &lt;
          <p className="text-[#79E9FD] text-2xl font-bold">
            <Typewriter
              options={{
                strings: ["RafaelSilvaSantos", "R4NP3R"],
                autoStart: true,
                loop: true,
                cursor: "",
                devMode: true,
              }}
            />
          </p>
          /&gt;
        </div>
        <nav>
          <ul className="flex w-full justify-end absolute bottom-[-1px] left-0 h-full w-fu">
            {navigationLinks.map((linkItem) => {
              const { icon, name, link } = linkItem;
              return (
                <li key={name} className="h-full">
                  <a
                    href={link}
                    className={
                      activeOption === name
                        ? "font-bold text-xl uppercase text-[#F8F8F2] h-full bg-[#282A36] px-8 flex items-center border-t border-t-[#FF6E9D] border-x-[0.1px] border-x-[#44475A] transition-all delay-50"
                        : "text-xl uppercase text-[#627299] h-full bg-[#21222C] px-8 flex items-center border-x-[0.1px] border-x-[#44475A] border-t border-t-transparent transition-all delay-50"
                    }
                    onClick={() => setActiveOption(name)}
                  >
                    {
                      <icon.url
                        style={{
                          fontSize: `${icon.width}px`,
                          color: `${icon.color}`,
                          width: `${icon.width}px`,
                          height: `${icon.width}px`,
                        }}
                      />
                    }
                    <span className="ml-1">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
