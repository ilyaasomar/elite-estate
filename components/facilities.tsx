import { ArrowRight, Check, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <div className="container mx-auto mt-36">
      {/* container */}
      <div className="flex items-center gap-x-5 w-full relative">
        {/* image */}
        <div className="w-full relative ">
          <div className="absolute inset-0 bg-[#74B0FF] opacity-50 z-10"></div>

          <Image
            src="/images/facility-image.png"
            width={600}
            height={200}
            alt="image"
            className="object-contain z-1"
          />
          <div className="absolute top-56 left-64 z-50">
            <Image
              src="/images/play-button.png"
              width={80}
              height={80}
              alt="image"
              className="object-contain  "
            />
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col w-full gap-y-6">
          <h3 className="font-normal uppercase font-inter text-start text-[18px] text-primaryColor-0">
            Our facilities
          </h3>
          <h1 className="text-[46px] font-inter font-semibold leading-[56px] max-w-2xl">
            The experts in local and international property
          </h1>
          <p className="font-normal font-inter text-[16px] leading-[26px] text-stateGray-0 max-w-2xl">
            Agent hen an unknown printer took a galley of type and scramble d it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic.
          </p>
          <div className="flex items-center justify-between max-w-lg">
            {/*  */}
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Parking Space
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Swimming Pool{" "}
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Private Security{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Medical Center
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Kids Playland
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <Check size={20} className="text-primaryColor-0" />
                <p className="font-inter text-[18px] leading-[26px] text-stateGray-0">
                  Library Area
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex gap-x-1 items-center text-primaryColor-0">
            <MoveRight size={20} />
            <p className="font-medium text-[16px] font-inter">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
