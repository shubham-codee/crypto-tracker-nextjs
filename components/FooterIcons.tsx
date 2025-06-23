import React from "react";
import { FaHashtag, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function FooterIcons() {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-start md:items-center space-y-8 md:space-y-0 bg-gray-100 px-10 py-5 text-slate-900">
      <div className="flex items-center space-x-2 text-2xl font-semibold">
        <FaHashtag className="text-slate-900" />
        <span>BUILT BY SHUBH</span>
      </div>
      <div className="flex space-x-4 text-2xl text-slate-900">
        <FaTwitter />
        <FaYoutube />
        <FaFacebookF />
      </div>
    </div>
  );
}