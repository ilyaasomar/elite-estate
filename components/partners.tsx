import { SummaryLinks, partnerLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="hidden lg:block bg-[#F5F5F5] py-10 mt-36">
      <div className="px-4 md:container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {partnerLogos.map((partner) => (
            <>
              <div className="flex flex-col items-center justify-center gap-y-5">
                <Image
                  src={partner.image}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full object-contain"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
