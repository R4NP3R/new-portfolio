import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

export const ObjectInfo = () => {
    const [handleInformations, setHandleInformations] = useState(true);
  return (
    <>
      <div className="my-container">
        <div className="mb-20">
          <p className="text-2xl">
            <span className="text-[#FF6E9D]">import type</span>
            <span className="text-[#F8F8F2]">
              {" {"} Informações {"} "}
            </span>
            <span className="text-[#FF6E9D]">from</span>
            <span className="text-[#E9F270]"> "../../vida"</span>
          </p>
          <p className="text-2xl">
            <span className="text-[#FF6E9D]">import type</span>
            <span className="text-[#F8F8F2]">
              {" {"} Stacks {"} "}
            </span>
            <span className="text-[#FF6E9D]">from</span>
            <span className="text-[#E9F270]"> "../../estudos"</span>
          </p>
        </div>
        <p className="text-2xl group">
          <span className="relative">
            {handleInformations ? (
              <SlArrowDown
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-25px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            ) : (
              <SlArrowRight
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-25px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            )}
          </span>
          <span className="text-[#FF6E9D]">const</span>
          <span className="text-[#BD93F9]"> informaçãoes</span>
          <span className="text-[#FF6E9D]">:</span>
          <span className="text-[#79E9FD]">Informacoes</span>
          <span className="text-[#FF6E9D]"> = </span>
          <span className="text-[#F8F8F2]"> {"{"} </span>
        </p>
        {handleInformations && (
          <div className="flex">
            <div className="w-5 bg-[#2E393B] border-l border-l-[#6B7873]"></div>
            <div className="w-1/2">
              <p className="text-2xl">
                <span className="text-[#F8F8F2]">nome</span>
                <span className="text-[#FF6E9D]">:</span>
                <span className="text-[#E9F270]"> "Rafael Silva Santos"</span>
                <span className="text-[#F8F8F2]">,</span>
              </p>
              <p className="text-2xl">
                <span className="text-[#F8F8F2]">idade</span>
                <span className="text-[#FF6E9D]">:</span>
                <span className="text-[#BD93F9]"> 21</span>
                <span className="text-[#F8F8F2]">,</span>
              </p>
              <p className="text-2xl">
                <span className="text-[#F8F8F2]">cargo</span>
                <span className="text-[#FF6E9D]">:</span>
                <span className="text-[#E9F270]"> "Desenvolvedor Web"</span>
                <span className="text-[#F8F8F2]">,</span>
              </p>
              <p className="text-2xl">
                <span className="text-[#F8F8F2]">descrição</span>
                <span className="text-[#FF6E9D]">:</span>
                <span className="text-[#E9F270]">
                  {" "}
                  "Olá, sou Rafael Silva Santos, desenvolvedor apaixonado por
                  tecnologia e por criar soluções que unem funcionalidade,
                  desempenho e boas práticas de desenvolvimento. Estou em
                  constante evolução, sempre buscando aprender e aplicar novos
                  conhecimentos em projetos reais."
                </span>
              </p>
            </div>
          </div>
        )}
        <p className="text-2xl">
          <span className="text-[#F8F8F2]"> {"}"} </span>
        </p>
      </div>
    </>
  );
};
