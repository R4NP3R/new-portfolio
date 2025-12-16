import {
  ProjectLinks,
  type ProjectLinksParams,
} from "../componets/ProjectLinks";

interface Parameters {
  isFinal?: boolean;
  name: string;
  data: string;
}

interface ProjectAnnotations {
  name: string;
  parameters: Parameters[];
}

export interface ProjectInfoData {
  annotation: ProjectAnnotations[];
  name: string;
  image: string;
  projectLinks: ProjectLinksParams;
}

interface ProjectInfoParams {
  projects: ProjectInfoData;
}

export const ProjectInfo = ({ projects }: ProjectInfoParams) => {
  const { annotation, image, name, projectLinks } = projects;
  return (
    <>
      <div>
        {annotation.map((info) => {
          const { name, parameters } = info;
          return (
            <p key={name} className="text-lg">
              <span className="text-[#9E9C43]">@{name}</span>
              <span className="text-[#B4B5B3]">{"("}</span>
              {parameters.map((info) => {
                const { name, data, isFinal } = info;
                return (
                  <>
                    <span className="text-[#B4B5B3]">{name} = </span>
                    <span className="text-[#69954C]">"{data}"</span>
                    {!isFinal && <span className="text-[#B4B5B3]">, </span>}
                  </>
                );
              })}
              <span className="text-[#B4B5B3]">
                {")"} <br />
              </span>
            </p>
          );
        })}
        <p className="text-[#9E9C43] text-lg">
          @RequiredArgsConstructor <br />
        </p>
        <p className="text-lg">
          <span className="text-[#CE8D59]">public project</span>
          <span className="text-[#B4B5B3]">
            {" "}
            {name} {"{"}
          </span>
        </p>
        <img src={image} alt="" />
        <div className="flex mt-2">
          <ProjectLinks github={projectLinks.github} site={projectLinks.site} />
        </div>

        <p>
          <span className="text-[#B4B5B3]">{"}"}</span>
        </p>
      </div>
    </>
  );
};
