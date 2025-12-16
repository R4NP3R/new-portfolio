import * as LogoBi from 'react-icons/bi'
import * as LogoDi from 'react-icons/di'
import { ContactStacks, type ContactStacksParams } from '../contactStacks';

const frontEndStack:ContactStacksParams = {
  title: "FrontEnd",
  logos: [
    {
      icon: LogoBi.BiLogoTypescript,
      color: "text-blue-500"
    },
    {
      icon: LogoBi.BiLogoReact,
      color: "text-blue-400"
    },
    {
      icon: LogoBi.BiLogoTailwindCss,
      color: "text-blue-500"
    }
  ]
}

const BackEndStack:ContactStacksParams = {
  title: "BackEnd",
  logos: [
    {
      icon: LogoBi.BiLogoJava,
      color: "text-red-500"
    },
    {
      icon: LogoBi.BiLogoSpringBoot,
      color: "text-emerald-600"
    },
    {
      icon: LogoDi.DiMsqlServer,
      color: "text-gray-400"
    },
  ]
}

const tools:ContactStacksParams = {
  title: "Ferramentas",
  logos: [
    {
      icon: LogoBi.BiLogoDocker,
      color: "text-blue-500"
    },
    {
      icon: LogoBi.BiLogoGit,
      color: "text-red-500"
    }
  ]
}


export const Contact = () => {
  return (
    <section
      className=" bg-[#0D1117] min-h-dvh py-20 flex justify-center mona-sans"
      id="contato"
    >
      <div className="w-3/4 grid grid-cols-4 gap-8">
        <div className="flex flex-col col-span-1 h-full gap-8 ">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/12851123?v=4"
              alt=""
              className="rounded-full border-2 border-[#3D444D] w"
            />
            <div className="absolute bg-[#0D1117] rounded-full border border-[#3D444D] w-10 h-10 right-6 bottom-10 flex items-center justify-center cursor-default">
              <p>🎉</p>
            </div>
          </div>
          <p className="text-[#F0F6FC] text-2xl font-semibold leading-0.5">
            Rafael Silva Santos
          </p>
          <p className="text-[#9198A1] text-xl font-light leading-0.5">
            R4NP3R
          </p>
        </div>
        <div className="w-full h-full border border-[#3D444D] col-span-3 rounded-lg p-4">
          <div className="border-b border-[#3D444D] p-2">
            <p className="text-3xl font-bold text-[#F0F6FC]">
              💻 Rafael Silva Santos
            </p>
          </div>
          <div className="pt-4 flex flex-col text-[#F0F6FC]">
            <h3 className="text-xl font-bold">Desenvolvedor Web</h3>
            <p className="">
              Olá, sou Rafael Silva Santos, desenvolvedor apaixonado por
              tecnologia e por criar soluções que unem funcionalidade,
              desempenho e boas práticas de desenvolvimento. Estou em constante
              evolução, sempre buscando aprender e aplicar novos conhecimentos
              em projetos reais.
            </p>
            <div>
              <h1 className="pt-4 font-bold text-2xl">Stacks</h1>
              <ContactStacks title={frontEndStack.title} logos={frontEndStack.logos} />
              <ContactStacks title={BackEndStack.title} logos={BackEndStack.logos} />
              <ContactStacks title={tools.title} logos={tools.logos} />
            </div>
            <div>
              <h1 className="pt-4 font-bold text-2xl">Contatos</h1>
              <ul className='flex gap-4'>
                <li>
                  <a href="https://www.linkedin.com/in/7-rafael-santos/" target='_blank' className='flex items-center'>
                    <LogoBi.BiLogoLinkedinSquare className='text-5xl text-blue-500' />
                    <span className='text-2xl'>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/R4NP3R" target='_blank' className='flex items-center'>
                    <LogoBi.BiLogoGithub className='text-5xl ' />
                    <span className='text-2xl'>Github</span>
                  </a>
                </li>
              </ul>
            </div>       
              <img className='w-2/5 mt-4' src="https://camo.githubusercontent.com/fa39daa38b5c779187695c0ddf8ed00d3f702f29ccf8a1f7374c7c9ef1580b8b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d52344e503352266c61796f75743d636f6d70616374267468656d653d7261646963616c26686964653d73776966742c6373686172702532372f253345" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
