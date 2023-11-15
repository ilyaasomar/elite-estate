import { testmonialLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const Testmonials = () => {
  return (
    <div className="mt-36 bg-[#E9F3FF] py-24">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-normal uppercase text-start font-inter text-[18px] text-primaryColor-0">
              Our Testimonials
            </h3>
            <h1 className="text-secondaryColor-0 max-w-xl text-center font-inter text-[42px] leading-[52px] font-semibold">
              What Our Customers Says
            </h1>
          </div>
          {/*  */}
          <div className="flex flex-row items-center gap-x-10 w-full mt-10">
            {
              testmonialLinks.map((testmonial)=>(

            <div className="flex flex-col" key={testmonial.id}>
              {/* contenet */}
              <div className="bg-white relative flex items-center p-10 text-center rounded-xl">
                <p className="font-normal text-[16px] leading-[26px] text-stateGray-0">
                  {testmonial.content}
                </p>
                {/* <div className="bg-black absolute z-10 w-10 h-20 top-10" /> */}
              </div>
              {/* user */}
              <div className="flex flex-row items-center gap-x-2 mt-4 ml-2">
                <Image
                  src={testmonial.image}
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="flex flex-col ml-3 gap-y-0">
                  <h3 className="text-[18px] font-medium">{testmonial.name}</h3>
                  <p className="text-[14px] font-normal text-secondaryColor-0">
                    {testmonial.role}
                  </p>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
