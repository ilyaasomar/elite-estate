import { SummaryLinks, partnerLogos } from "@/constants";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="bg-primaryColor-0 py-10 mt-36">
      <div className="px-4 md:container mx-auto">
        <div className="flex flex-col px-4 md:px-24 lg:px-0 lg:flex-row items-center justify-between gap-y-6 lg:py-0">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-inter font-semibold text-3xl md:text-[40px] text-white">
                Join Our Newsletter Now
              </h1>
              <p className="font-inter font-normal text-[18px] text-white">
                Register now to get updates on promotions...
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-3">
            <Input placeholder="Enter your email to subscribe" />
            <Button className="bg-secondaryColor-0 ">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
