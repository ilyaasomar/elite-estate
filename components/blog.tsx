import { blogLinks } from "@/constants";
import { Building, Calendar, MoveRight, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="px-4 md:container mx-auto m-36">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-0 items-center ">
          <h3 className="font-normal text-start font-inter text-[18px] text-primaryColor-0">
            Properties
          </h3>
          <h1 className="text-secondaryColor-0 font-inter text-[24px] lg:text-[46px] leading-[82px] font-semibold">
            our Popular properties
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-7">
          {blogLinks.map((blog) => (
            <>
              <div className="bg-white relative flex flex-col shadow-xl">
                <div className="flex flex-col items-center gap-y-3">
                  <Image
                    src={blog.image}
                    width={500}
                    height={500}
                    alt="image"
                    className=""
                  />

                  <div className="flex flex-col py-3 px-5 ">
                    {/* top section */}
                    <div className="flex flex-col gap-y-3 border-b-2 py-2 mb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-x-1 items-center">
                          <User size={16} className="text-primaryColor-0" />
                          <p className="text-[14px] leading-[24px] font-inter font-normal text-stateGray-0">
                            {blog.agent}
                          </p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                          <Building size={16} className="text-primaryColor-0" />
                          <p className="text-[14px] leading-[24px] font-inter font-normal text-stateGray-0">
                            {blog.type}
                          </p>
                        </div>
                      </div>
                      <h3 className="font-medium text-[24px] leading-[36px] font-inter">
                        {blog.title}
                      </h3>
                    </div>
                    {/* bottom section  */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar
                          size={16}
                          className="mr-2 text-primaryColor-0"
                        />
                        <p className="font-normal text-[14px] leading-[24px] font-inter text-stateGray-0">
                          {blog.published_date}
                        </p>
                      </div>
                      <div className="flex flex-row items-center py-2">
                        <p className="font-medium text-[14px] leading-[24px] cursor-pointer font-inter text-primaryColor-0">
                          {blog.cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* cta */}
        <div className="rounded-full mt-24 w-36 x-7 py-2 flex items-center justify-center gap-x-2 border border-primaryColor-0 hover:cursor-pointer">
          <p className="text-[14px] leading-[24px] text-stateGray-0 font-inter">
            View All
          </p>
          <MoveRight size={20} className="text-stateGray-0" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
