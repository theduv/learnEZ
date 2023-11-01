import { memo } from "react";
import { linksList } from "./linksList";
import { HomeLink } from "./HomeLink.tsx";

type link = {
  id: number;
  title: string;
  href: string;
};

const HomeLinksBase = () => {
  return (
    <div className="flex flex-col space-y-6">
      {linksList.map((link: link) => (
        <HomeLink href={link.href} title={link.title} key={link.id} />
      ))}
    </div>
  );
};

export const HomeLinks = memo(HomeLinksBase);
