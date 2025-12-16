export interface ProjectLinksParams {
  github: {
    name: string;
    link: string;
  };
  site?: {
    name: string;
    link: string;
  };
}

export const ProjectLinks = ({ github, site }: ProjectLinksParams) => {
  return (
    <div className="flex flex-col w-full">
      <p className="pl-4 text-lg w-full relative group">
        <div className="group-hover:bg-[#26282E] absolute h-full w-[103%] z-10 left-[-20px]"></div>
        <div className="relative z-20">
          <span className="text-[#CE8D59]">private final </span>
          <a
            href={github.link}
            target="_blank"
            className="text-[#B4B5B3] hover:underline"
          >
            GithubRepository
          </a>
          <span className="text-[#C16E9C]"> {github.name}</span>
          <span className="text-[#B4B5B3]">{";"}</span>
        </div>
      </p>
      {site && (
        <p className="pl-4 text-lg w-full relative group">
          <div className="group-hover:bg-[#26282E] absolute h-full w-[103%] z-10 left-[-20px]"></div>
          <div className="relative z-20">
            <span className="text-[#CE8D59]">private final </span>
            <a
              href={site.link}
              target="_blank"
              className="text-[#B4B5B3] hover:underline"
            >
              ExternalSite
            </a>
            <span className="text-[#C16E9C]"> {site.name}</span>
            <span className="text-[#B4B5B3]">{";"}</span>
          </div>
        </p>
      )}
    </div>
  );
};
