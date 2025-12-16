import { useState } from "react";
import type { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Package from "../../assets/package_dark.svg?react";
import { LuUserRound } from "react-icons/lu";

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
    name: "home",
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
    link: "#contato",
    name: "contato",
    icon: {
      url: LuUserRound,
      width: 24,
      color: "#9198A1",
    },
  },
];

export const Header = () => {
  const [activeOption, setActiveOption] = useState(navigationLinks[0].name);

  function handleActiveItemScroll() {
    for (let i = 0; i < navigationLinks.length; i++) {
      let section = document.getElementById(navigationLinks[i].name);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 20 && rect.bottom >= 120) {
          setActiveOption(navigationLinks[i].name);
        }
      }
    }
  }
  window.addEventListener("scroll", handleActiveItemScroll);

  return (
    <header
      className={
        `w-full border-b-[0.1px] fixed cascadia z-50 transition-all delay-150 ` +
        `${activeOption == "home" && "border-[#44475A] bg-[#282A36] "} ` +
        `${activeOption == "projetos" && "border-[#393B40] bg-[#1E1F22] "} ` +
        `${activeOption == "contato" && "border-[#44475A] bg-[#010409]"} `
      }
    >
      <div className="flex my-container">
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
        <nav className="relative w-full">
          <ul className={activeOption === "home" ? (`flex justify-end absolute bottom-[-1px] left-0 h-full w-full`) : (`flex justify-end h-full w-full`)}>
            {navigationLinks.map((linkItem) => {
              const { icon, name, link } = linkItem;
              return (
                <li key={name} className="h-full">
                  <a
                    href={link}
                    className={
                      `
                      ${
                        activeOption === "home" &&
                        (activeOption === name
                          ? "font-bold text-xl uppercase text-[#F8F8F2] h-full  bg-[#282A36] px-8 flex items-center border-b-4 border-b-transparent border-t border-t-[#FF6E9D] border-x-[0.1px] border-x-[#44475A] transition-all delay-50"
                          : "text-xl uppercase text-[#627299] h-full bg-[#21222C] px-8 flex items-center border-x-[0.1px] border-x-[#44475A] border-b-4 border-b-transparent border-t border-t-transparent transition-all delay-50")
                      } 
                      ` +
                      `
                      ${
                        activeOption === "projetos" &&
                        (activeOption === name
                          ? "font-bold text-xl uppercase text-[#F8F8F2] h-full bg-[#1E1F22] px-8 border-x-[0.1px] border-x-transparent flex items-center border-b-4 border-b-[#3574F0] rounded-b-sm transition-all delay-50 border-t border-t-transparent"
                          : "text-xl uppercase text-[#627299] h-full bg-[#1E1F22] px-8 border-x-[0.1px] border-x-transparent flex items-center border-b-4 border-b-transparent transition-all delay-50 border-t border-t-transparent")
                      } 
                      ` +
                      `
                      ${
                        activeOption === "contato" &&
                        (activeOption === name
                          ? "font-bold text-xl uppercase text-[#F8F8F2] h-full bg-[#010409] px-8 border-x-[0.1px] border-x-transparent flex items-center border-b-4 border-b-[#F78166] transition-all delay-50 border-t border-t-transparent"
                          : "text-xl uppercase text-[#627299] h-full bg-[#010409] px-8 border-x-[0.1px] border-x-transparent flex items-center  border-b-4 border-b-transparent transition-all delay-50 border-t border-t-transparent")
                      }
                      `
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
