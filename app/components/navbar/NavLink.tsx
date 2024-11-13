"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: {
    url?: string;
    name: string;
    icon: JSX.Element;
  };
};
const NavLink = ({ item }: Props) => {
  const path = usePathname();

  const isActive = path === item.url;
  return (
    <Link
      className={`flex gap-2 items-center px-5 py-5
  hover:bg-gray-200 transition border-l-2 border-transparent ${
    isActive && "text-blue-500 border-l-2 !border-blue-500"
  }`}
      href={item.url || "/"}
    >
      {item.icon}
      <span className="nav-text">{item.name}</span>
    </Link>
  );
};

export default NavLink;
