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
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-24 gap-x-1">
            {/* right section */}
            <div className="flex flex-1 items-start flex-col gap-y-10">
              <h1 className="text-7xl font-bold leading-tight font-inter">
                Discover A Place You'ill Love To Live
              </h1>
              <p className="font-normal font-inter text-[16px] leading-[26px] text-stateGray-0">
                Homie is a real estate soluation that gives you the local scoop
                about homes. Search confidently with your trusted source of
                homes for sale or rent.
              </p>
              <Button className="bg-primaryColor-0 font-inter">Make An Enquiry</Button>
            </div>
            {/* left section */}
            <div className="flex flex-1 items-center relative justify-end">
              <Image
                src="/images/hero-image.png"
                width={500}
                height={100}
                alt="image"
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
      <div className="absolute bg-white flex items-center justify-center shadow-lg w-2/3 left-1/2 top-[780px]  h-24 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-x-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Somalia</SelectItem>
              <SelectItem value="2">Palastine</SelectItem>
              <SelectItem value="3">Indonisia</SelectItem>
              <SelectItem value="4">Maleysia</SelectItem>
              <SelectItem value="5">Pakistan</SelectItem>
              <SelectItem value="6">Kyzagistan</SelectItem>
              <SelectItem value="7">Afghanistan</SelectItem>
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
              <SelectItem value="5">Pakistan</SelectItem>
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
          <Button className="bg-primaryColor-0 flex gap-x-2">
            <Search size={20} />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;