import Link from "next/link";
import React from "react";

const NavItems = () => {
  const routes = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "About",
      href: "/",
    },
    {
      id: 3,
      label: "Projects",
      href: "/",
    },
    {
      id: 4,
      label: "Blog",
      href: "/",
    },
    {
      id: 5,
      label: "Contact",
      href: "/",
    },
  ];
  return <div className="hidden md:flex items-center gap-x-4 lg:gap-x-8">
    {routes.map((route)=>(
        <Link href={route.href} key={route.id} className="font-normal text-[16px] text-stateGray-0 font-inter">
            {route.label}
        </Link>
    ))}
  </div>;
};

export default NavItems;
