import React from "react";
import LogoWhite from "./logo-white";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Mail, MapPin, Smartphone } from "lucide-react";
import { footerQuickLinks, footerServices } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-secondaryColor-0">
      <div className="container mx-auto">
        {/* top section */}
        <div className="pt-12 pb-4 flex gap-x-10 justify-between">
          {/* logo section */}
          <div className="flex flex-col gap-y-5">
            <LogoWhite />
            <p className="font-inter font-normal text-[16px] leading-[26px] text-white max-w-sm">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            {/* social media icons */}
            <div className="flex gap-x-3 items-center">
              {/* facebook */}
              <div className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center">
                <FaFacebookF size={20} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center">
                <FaInstagram size={20} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center">
                <FaLinkedinIn size={20} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center">
                <FaTwitter size={20} className="text-white" />
              </div>
            </div>
          </div>
          {/* quick links */}
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Quick Links
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              {footerQuickLinks.map((link) => (
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  {link.title}
                </p>
              ))}
            </div>
          </div>

          {/* services*/}
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Services
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              {footerServices.map((link) => (
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  {link.title}
                </p>
              ))}
            </div>
          </div>
          {/* services*/}
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Contract
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              <div className="flex gap-x-2 items-center">
                <MapPin size={28} className="text-white" />
                <p className="font-inter font-medium text-[16px] max-w-xs cursor-pointer text-white leading-[26px]">
                  124 Brooklyn, New York United States
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Smartphone size={24} className="text-white" />
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  +11 2 3456 7890
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Mail size={20} className="text-white" />
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  info@houzing.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-10  border-t-2 py-5">
          <div className="flex justify-between items-center">
            <p className="font-normal text-[14px] font-inter text-white">
              © Copyright Ilyas Omar 2023 All Right Reserved.
            </p>
            <div className="flex items-center gap-x-5">
              <p className="font-normal text-[14px] font-inter text-white">
                terms of use
              </p>
              <div className="border border-s-0 h-4 bg-white" />
              <p className="font-normal text-[14px] font-inter text-white">
                privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
