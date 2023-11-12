import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-36">
      {/* container */}
      <div className="flex items-center gap-x-20 w-full relative">
        {/* image */}
        <div className="w-1/3">
          <Image
            src="/images/about-image.png"
            width={300}
            height={200}
            alt="image"
            className="w-fit h-full ml-10"
          />
          <div className="absolute w-52 p-5 bg-white shadow-lg h-60 top-[360px] rounded-lg space-y-2">
            <Image
              src="/images/trophy.png"
              width={60}
              height={40}
              alt="image"
              className=""
            />
            <h3 className="font-medium font-inter text-[22px] leading-[30px]">
              National Real Estate Awards
            </h3>
            <p className="font-medium font-inter text-[20px] text-stateGray-0">Analysis</p>
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col w-2/3 gap-y-6">
          <h3 className="font-normal font-inter text-start text-[18px] text-primaryColor-0">
            ABOUT US
          </h3>
          <h1 className="text-[46px] font-inter font-semibold leading-[56px] max-w-2xl">
            We're on a Mission to Change View of RealEstate Field.
          </h1>
          <p className="font-normal font-inter text-[16px] leading-[26px] text-stateGray-0 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed
            eiusmod tempor incididunt ut labore et dolore.enim admix minim
            veniam quis nostrud.
          </p>
          <div className="flex items-center justify-between max-w-2xl">
            <div className="flex flex-col gap-y-3">
              <Image
                src="/images/villa.png"
                width={40}
                height={40}
                alt="image"
              />
              <h3 className="font-semibold text-[15px] font-inter">Modern Villa</h3>
              <p className="font-normal font-inter text-[16px] leading-[26px] text-stateGray-0 max-w-[270px]">
                When unknown printer took galley of type and scrambled.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-y-3">
              <Image
                src="/images/villa.png"
                width={40}
                height={40}
                alt="image"
              />
              <h3 className="font-semibold text-[15px] font-inter">Secure Payment</h3>
              <p className="font-inter font-normal text-[16px] leading-[26px] text-stateGray-0 max-w-[270px]">
                When unknown printer took galley of type and scrambled.{" "}
              </p>
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

export default About;
