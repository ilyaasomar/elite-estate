"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import NavItems from "./nav-items";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#ECF2F9] w-full mx-auto border-b border-primaryColor-0">
      <div className="px-4 md:container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* logo */}
          <Logo />
          <div className="relative flex items-center gap-x-16">
            {/* menu items */}
            {/* <div className=""></div> */}
            <NavItems />
            {/* search icon */}
            <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white">
              <Search size={20} className="text-primaryColor-0" />
            </div>
            {/* call to action */}
            <Button className="hidden md:flex bg-primaryColor-0 font-inter hover:bg-primaryColor-0">
              Get Started
            </Button>
            <Menu
              size={30}
              className="flex md:hidden"
              onClick={() => setOpen(!open)}
            />
            {/* show menus with mobile */}
            {open && (
              <>
                <div className="absolute top-[60px] rounded-b-lg bg-primaryColor-0 right-0 w-56 h-fit z-10 py-5">
                  <div className="md:hidden flex flex-col items-center gap-y-4 text-white font-semibold text-lg">
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Blog</p>
                    <p>Contacts</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
