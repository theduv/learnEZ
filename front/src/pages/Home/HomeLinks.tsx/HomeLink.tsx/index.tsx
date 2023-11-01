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
      className="text-7xl hover:translate-x-12 hover:scale-110 duration-150 ease-out font-medium px-6 py-5 bg-gray-600 rounded-md text-gray-200 "
    >
      {title}
    </Link>
  );
};

export const HomeLink = memo(HomeLinkBase);
