import React from "react";
import Image from "next/image";
import { ServicesLinks } from "@/constants";

const Services = () => {
  return (
    <div className="px-4 md:container mx-auto m-36">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-0 items-center justify-center">
          <h3 className="font-normal font-inter text-start text-[18px] text-primaryColor-0">
            OUR SERVICES
          </h3>
          <h1 className="text-secondaryColor-0 font-inter text-3xl md:text-[46px] leading-[82px] font-semibold">
            Our Main Focus
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 mt-7">
          {ServicesLinks.map((service) => (
            <>
              <div className="group relative">
                <div className="bg-white shadow-2xl p-7 py-12 flex flex-col items-center hover:border-b hover:cursor-pointer">
                  <div className="bg-white shadow-2xl w-20 h-20 rounded-full flex items-center justify-center">
                    <Image src={service.image} alt="" width={40} height={40} />
                  </div>
                  {/* texts */}
                  <div className="flex flex-col items-center py-5 mt-7 gap-y-4">
                    <h3 className="font-medium font-inter text-[26px] leading-[30px] text-primaryColor-0">
                      {service.title}
                    </h3>
                    <p className="font-normal font-inter text-[16px] text-center leading-[26px] text-stateGray-0 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  {/* footer */}
                  <div className="flex items-center">
                    <h3 className="text-[16px] font-inter font-medium leading-[26px] text-primaryColor-0">
                      {service.footerText}
                      {/* <service.icon /> */}
                    </h3>
                  </div>
                </div>
                <div className="w-full h-1 bg-primaryColor-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
