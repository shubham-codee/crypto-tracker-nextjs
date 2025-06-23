import React from "react";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-100 justify-around p-10">
        <div>
          <h6 className="font-semibold uppercase text-gray-500 text-sm mb-2 md:mb-4">
            SERVICE
          </h6>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Branding
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Design
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Marketing
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Advertisement
          </p>
        </div>
        <div>
          <h6 className="font-semibold uppercase text-gray-500 text-sm mb-2 md:mb-4 mt-7 md:mt-0">
            COMPANY
          </h6>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            About Us
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Contact
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Jobs
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Press Kit
          </p>
        </div>
        <div>
          <h6 className="font-semibold uppercase text-gray-500 text-sm mb-2 md:mb-4 mt-7 md:mt-0">
            LEGAL
          </h6>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Terms of Use
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Privacy Policy
          </p>
          <p className="w-fit font-medium text-gray-800 text-base hover:underline mb-2 md:mb-3 cursor-pointer">
            Cookie Policy
          </p>
        </div>
      </div>
      <hr className="border border-gray-200"/>
      <FooterIcons />
    </>
  );
}

export default Footer;
