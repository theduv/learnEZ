import { Link } from "wouter";
import { memo } from "react";

interface HomeLinkProps {
  href: string;
  title: string;
}

const HomeLinkBase = ({ href, title }: HomeLinkProps) => {
  return (
    <Link
      href={href}
      className="text-7xl rounded-md text-offwhite hover:text-accent transition duration-900 flex-shrink-0"
    >
      {title}
    </Link>
  );
};

export const HomeLink = memo(HomeLinkBase);
