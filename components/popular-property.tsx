import { Bath, Bed, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { popularProperties } from "@/constants";

const PopularProperties = () => {
  return (
    <div className="px-4 md:container mx-auto m-36">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-0 items-center justify-center">
          <h3 className="font-normal text-start font-inter text-[18px] text-primaryColor-0">
            Properties
          </h3>
          <h1 className="text-secondaryColor-0 font-inter text-3xl md:text-[46px] leading-[82px] font-semibold">
            our Popular properties
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-7 justify-center">
          {popularProperties.map((property) => (
            <>
              <div className="bg-white relative flex flex-col gap-y-2 shadow-lg">
                {/* image div */}
                <Image
                  src={property.image}
                  width={500}
                  height={500}
                  alt="image"
                  className="w-full object-contain"
                />
                <div className="fle flex-col space-y-2 p-4">
                  <h2 className="font-medium text-[20px] text-primaryColor-0 font-inter">
                    {property.price}
                  </h2>
                  <p className="font-normal text-[12px] text-stateGray-0 font-inter">
                    {property.title}
                  </p>
                  <h2 className="font-medium text-[18px] text-primaryColor-0 font-inter">
                    {property.address}
                  </h2>
                  {/* beds and baths */}
                  <div className="flex flex-row gap-x-5 pb-4">
                    <div className="flex flex-row gap-x-1">
                      <Bed size={20} className="text-secondaryColor-0" />
                      <p className="font-inter font-normal text-[12px] leading-[24px]">
                        {property.bedrooms}
                      </p>
                    </div>
                    <div className="flex flex-row gap-x-1">
                      <Bath size={20} className="text-secondaryColor-0" />
                      <p className="font-inter font-normal text-[12px] leading-[24px]">
                        {property.bedrooms}
                      </p>
                    </div>
                    {/* agent */}
                  </div>
                  <div className="flex flex-row items-center gap-x-2 mt-4">
                    <Image
                      src={property.agentImage}
                      width={40}
                      height={40}
                      alt=""
                    />
                    <div className="flex flex-col ml-3 gap-y-0">
                      <h3 className="text-[16px] font-normal text-primaryColor-0">
                        {property.agent}
                      </h3>
                      <p className="text-[12px] font-normal text-stateGray-0">
                        {property.agentTile}
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProperties;
