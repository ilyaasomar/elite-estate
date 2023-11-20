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
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondaryColor-0">
      <div className="px-4 md:container mx-auto ">
        {/* top section */}
        <div className="pt-12 pb-4 flex flex-col md:flex-row gap-y-10 gap-x-10 justify-between">
          {/* logo section */}
          <div className="flex flex-col gap-y-5">
            <LogoWhite />
            <p className="hidden md:block font-inter font-normal text-[16px] leading-[26px] text-white max-w-sm">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            {/* social media icons */}
            <div className="flex gap-x-3 items-center">
              {/* facebook */}
              <Link
                href="https://www.facebook.com/xayle.cumar"
                className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center"
              >
                <FaFacebookF size={20} className="text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/ilyaas_haile"
                className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center"
              >
                <FaInstagram size={20} className="text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ilyas-omar-667b88171"
                className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn size={20} className="text-white" />
              </Link>
              <Link
                href="https://twitter.com/ilyashaile"
                className="w-8 h-8 bg-primaryColor-0 rounded-full flex items-center justify-center"
              >
                <FaTwitter size={20} className="text-white" />
              </Link>
            </div>
          </div>
          {/* quick links */}
          <div className="hidden lg:flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Quick Links
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              {footerQuickLinks.map((link) => (
                <p
                  key={link.id}
                  className="font-inter font-medium text-[16px] cursor-pointer text-white"
                >
                  {link.title}
                </p>
              ))}
            </div>
          </div>

          {/* services*/}
          <div className="hidden lg:flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Services
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              {footerServices.map((link) => (
                <p
                  key={link.id}
                  className="font-inter font-medium text-[16px] cursor-pointer text-white"
                >
                  {link.title}
                </p>
              ))}
            </div>
          </div>
          {/* contacts*/}
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-[24px] leading-[26px] text-white">
              Contract
            </p>
            <div className="flex flex-col items-start space-y-4 mt-5">
              <div className="flex gap-x-2 items-center">
                <MapPin size={28} className="text-white" />
                <p className="font-inter font-medium text-[16px] max-w-xs cursor-pointer text-white leading-[26px]">
                  Taleh, Mogadishu - Somalia
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Smartphone size={24} className="text-white" />
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  +252 61 6437857
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Mail size={20} className="text-white" />
                <p className="font-inter font-medium text-[16px] cursor-pointer text-white">
                  info@hirsad.com
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
            <div className="hidden md:flex items-center gap-x-5">
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
