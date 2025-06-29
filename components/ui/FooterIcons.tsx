import React from "react";
import { FaHashtag, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function FooterIcons() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 bg-slate-50 dark:bg-slate-950 px-10 py-5 text-slate-800 dark:text-slate-200">
      <div className="flex items-center space-x-2 text-2xl font-semibold">
        <FaHashtag className="text-teal-600 dark:text-teal-400" />
        <span>BUILT BY SHUBH</span>
      </div>
      <div className="flex space-x-4 text-2xl text-sky-700 dark:text-sky-400">
        <FaTwitter />
        <FaYoutube />
        <FaFacebookF />
      </div>
    </div>
  );
}
