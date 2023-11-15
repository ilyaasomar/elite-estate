import { agentsLink } from "@/constants";
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Agents = () => {
  return (
    <div className="container mx-auto m-36">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-0 items-center justify-center">
          <h3 className="font-normal text-start font-inter text-[18px] text-primaryColor-0">
            EXPERTISE IS HERE
          </h3>
          <h1 className="text-secondaryColor-0 font-inter text-[46px] leading-[82px] font-semibold">
            Our Growing Agents
          </h1>
        </div>
        <div className="flex gap-x-10 mt-7 justify-center">
          {agentsLink.map((agent) => (
            <>
              <div className="bg-white relative flex flex-col gap-y-2 shadow-lg border p-6 w-1/4">
                {/* image div */}
                <Image
                  src={agent.image}
                  width={170}
                  height={170}
                  alt="image"
                  className="w-full object-contain rounded-md"
                />
                <div className="fle flex-col space-y-2">
                  <h2 className="font-medium text-[20px] text-secondaryColor-0 font-inter">
                    {agent.name}
                  </h2>
                  <p className="font-normal text-[14px] text-stateGray-0 font-inter">
                    {agent.title}
                  </p>
                  <span className="flex items-center gap-x-2 ">
                    <Phone size={15} className="text-primaryColor-0" />
                    <p className="font-normal text-[14px] text-stateGray-0 font-inter">
                      {agent.phone}
                    </p>
                  </span>
                </div>
                <div className="absolute bg-[#ececec] w-40 top-60 2x:top-56 ">
                  <p className="font-normal text-[14px] text-primaryColor-0 px-1 font-inter">
                    {agent.experience}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/*  */}

      <div className="bg-[#E2EFFF] w-full p-16 mt-36 flex items-center justify-between">
        <div className="flex flex-row gap-x-3 items-center">
          <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center">
            <Image
              src="/images/fluent_people.png"
              width={60}
              height={60}
              alt="image"
              className=""
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <h2 className="text-[38px] font-medium leading-[52px] text-[#282828] font-inter">
              Become an Agent
            </h2>
            <p className="text-[24px] leading-[26px] text-stateGray-0 font-normal font-inter">
              Agent hen an unknown printer took a galley scramble
            </p>
          </div>
        </div>
        {/* button */}
        <Button className="bg-primaryColor-0 hover:bg-primaryColor-0 font-inter flex justify-end px-7 text-[18px] leading-[26px]">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Agents;
