import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import CallToAction from "./call-to-action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[#F4F9FF] pb-10">
        <div className="px-4 md:container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center py-24 gap-y-16 lg:gap-x-1">
            {/* right section */}
            <div className="flex w-full lg:flex-1 items-start flex-col gap-y-10">
              <h1 className="text-7xl font-bold leading-tight font-inter">
                Discover A Place You will Love To Live
              </h1>
              <p className="font-normal font-inter text-[16px] leading-[26px] text-stateGray-0">
                Homie is a real estate soluation that gives you the local scoop
                about homes. Search confidently with your trusted source of
                homes for sale or rent.
              </p>
              <Button className="bg-primaryColor-0 font-inter hover:bg-primaryColor-0">
                Make An Enquiry
              </Button>
            </div>
            {/* left section */}
            <div className="flex w-full lg:flex-1 items-center relative lg:justify-center">
              <Image
                src="/images/hero-image.png"
                width={500}
                height={100}
                alt="image"
                className="w-full lg:w-4/5"
              />
              <Image
                src="/images/Rating.png"
                width={200}
                height={100}
                alt="image"
                className="absolute top-24 md:left-6 xl:-right-5 2xl:right-16"
              />
              <Image
                src="/images/Card.png"
                width={200}
                height={100}
                alt="image"
                className="absolute bottom-[-70px] right-36"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <CallToAction /> */}
      <div className="absolute bg-white hidden md:flex items-center justify-center shadow-lg w-full px-4 xl:w-2/3 left-1/2 xl:top-[780px]  h-24 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-x-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Mogadishu</SelectItem>
              <SelectItem value="2">Hargeysa</SelectItem>
              <SelectItem value="3">Kismaayo</SelectItem>
              <SelectItem value="4">Baydhabo</SelectItem>
              <SelectItem value="5">Boosaaso</SelectItem>
              <SelectItem value="6">Berbera</SelectItem>
              <SelectItem value="7">Marka</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Bedrooms</SelectItem>
              <SelectItem value="2">Pathrooms</SelectItem>
              <SelectItem value="3">Livingroom</SelectItem>
              <SelectItem value="4">Kitchen</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">For Rent</SelectItem>
              <SelectItem value="2">For Sale</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primaryColor-0 flex gap-x-2 px-4 hover:bg-primaryColor-0">
            <Search size={20} />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
