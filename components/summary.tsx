import { SummaryLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const Summary = () => {
  return (
    <div className="bg-[#E2EFFF] py-24 mt-36">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {SummaryLinks.map((summary) => (
            <>
              <div className="flex flex-col items-center gap-y-5">
                <Image src={summary.image} width={60} height={60} alt="image" />
                <h3 className="text-secondaryColor-0 font-bold font-inter text-[40px] leading-[50px]">
                  {summary.amount}
                </h3>
                <p className="font-normal text-[16px] text-center font-inter leading-[26px] text-stateGray-0">{summary.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
