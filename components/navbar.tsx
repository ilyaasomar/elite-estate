import React from "react";
import Logo from "./logo";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <div className="bg-[#ECF2F9] w-full mx-auto border-b border-primaryColor-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* logo */}
          <Logo />
          <div className="flex items-center gap-x-16">
            {/* menu items */}
            <NavItems />
            {/* search icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
              <Search size={20} className="text-primaryColor-0" />
            </div>
            {/* call to action */}
            <Button className="bg-primaryColor-0 font-inter">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
