import type { IconType } from "react-icons";

interface ContactStacksIcons {
  icon: IconType;
  color: string;
}

export interface ContactStacksParams {
  title: string;
  logos: ContactStacksIcons[];
}

export const ContactStacks = ({ title, logos }: ContactStacksParams) => {
  return (
    <>
      <h2 className="pt-4 font-semibold text-xl">{title}</h2>
      <ul className="text-5xl flex gap-1">
        {logos.map((logo) => (
          <li>
            <logo.icon className={logo.color} />
          </li>
        ))}
      </ul>
    </>
  );
};
