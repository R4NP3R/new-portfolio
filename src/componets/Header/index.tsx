import { useState } from "react";
import Typewriter from "typewriter-effect";
import type { navigationLinks } from "../../navigationLinks";


const aroz:navigationLinks = {
  link: "rafael",
  name: "rafel"
}

const navigationLinks: navigationLinks[] = [
  {
    link: "#",
    name: "inicio",
  },
  {
    link: "#",
    name: "projetos",
  },
  {
    link: "#",
    name: "contato",
  },
];

export const Header = () => {
  const [activeOption, setActiveOption] = useState("inicio");

  return (
    <header className="w-full border-b-[0.1px] border-[#44475A]">
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
        <ul className="flex w-full justify-end absolute bottom-[-1px] left-0 h-full w-fu">
          {navigationLinks.map((link) => {
            return (
              <li
                key={link.name}
                className={
                  activeOption === link.name
                    ? "bg-[#282A36] px-8 flex items-center border-t border-t-[#FF6E9D] border-x-[0.1px] border-x-[#44475A] transition-all delay-50"
                    : "bg-[#21222C] px-8 flex items-center border-x-[0.1px] border-x-[#44475A] border-t border-t-transparent transition-all delay-50"
                }
                onClick={() => setActiveOption(link.name)}
              >
                <a
                  href={link.link}
                  className={
                    activeOption === link.name
                      ? "font-bold text-xl uppercase text-[#F8F8F2] transition-all delay-50"
                      : "text-xl uppercase text-[#627299] transition-all delay-50"
                  }
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
