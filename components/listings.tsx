import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { listingLinks } from "@/constants";
import {
  Bath,
  Bed,
  CarFront,
  History,
  LayoutDashboard,
  MapPin,
  User,
} from "lucide-react";

const Listings = () => {
  return (
    <div className="container mx-auto m-36">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-0 items-center justify-center">
          <h3 className="font-normal uppercase text-start font-inter text-[18px] text-primaryColor-0">
            Featured Listing
          </h3>
          <h1 className="text-secondaryColor-0 max-w-xl text-center font-inter text-[46px] leading-[82px] font-semibold">
            We Bring Dream Homes To Reality
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-10 mt-7">
          {listingLinks.map((listing) => (
            <>
              <div className="bg-white relative flex flex-col gap-y-2 shadow-md p-6">
                <div className="flex flex-col items-center gap-y-2 border-b-2 mb-2">
                  <Image
                    src={listing.image}
                    width={500}
                    height={500}
                    alt="image"
                    className=""
                  />

                  <div className="flex flex-col items-center justify-center py-3">
                    <h3 className="font-medium text-[20px] leading-[30px] font-inter">
                      {listing.title}
                    </h3>
                    <div className="flex gap-x-1 items-center">
                      <MapPin size={16} className="text-primaryColor-0" />
                      <p className="text-[12px] leading-[22px] font-inter font-normal text-stateGray-0">
                        {listing.address}
                      </p>
                    </div>
                  </div>
                </div>
                {/* features div */}
                <div className="flex flex-row justify-between border-b-2 mb-2 pb-3">
                  {/* row one */}
                  <div className="flex flex-col items-start gap-y-3">
                    <div className="flex flex-row items-center">
                      <LayoutDashboard
                        size={16}
                        className="mr-2 text-primaryColor-0"
                      />
                      <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                        {listing.size}
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <Bed size={16} className="mr-2 text-primaryColor-0" />
                      <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                        {listing.bedrooms}
                      </p>
                    </div>
                  </div>
                  {/* row two */}
                  <div className="flex flex-col items-start gap-y-3">
                    <div className="flex flex-row items-center">
                      <CarFront
                        size={17}
                        className="mr-2 text-primaryColor-0"
                      />
                      <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                        {listing.garage}
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <Bath size={16} className="mr-2 text-primaryColor-0" />
                      <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                        {listing.bathrooms}
                      </p>
                    </div>
                  </div>
                </div>
                {/* owner & publish */}
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center">
                    <User size={16} className="mr-2 text-primaryColor-0" />
                    <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                      {listing.owner}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <History size={16} className="mr-2 text-primaryColor-0" />
                    <p className="font-normal text-[12px] leading-[22px] font-inter text-stateGray-0">
                      {listing.published}
                    </p>
                  </div>
                </div>
                {/* property status */}
                <div className="absolute bg-secondaryColor-0 text-white px-4 py-1 rounded-md top-10 left-10 ">
                  <p className="font-medium text-[14px] text-white font-inter leading-[22px] ">
                    {listing.status}
                  </p>
                </div>
                {/* button */}
                <Button className="bg-primaryColor-0 mt-3 rounded-sm font-inter text-white w-full hover:bg-primaryColor-0">
                  {listing.price}
                </Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
