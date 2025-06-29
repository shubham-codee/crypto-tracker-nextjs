import React from "react";
import {
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

function CoinHeader({
  name,
  logo,
  rank,
  website,
  discord,
  chat,
  twitter,
  github,
}: {
  name: string;
  logo: string;
  rank: string;
  website: string;
  discord: string;
  chat: string;
  twitter: string;
  github: string;
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-10">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={logo}
                  alt={name}
                  className="w-16 h-16 rounded-full border-4 border-gray-100 dark:border-slate-700 shadow-md hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-200">
                  {name}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-blue-100 dark:bg-slate-800 text-blue-800 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                    Rank #{rank}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform shadow-md"
                >
                  <FaGlobe className="text-lg" />
                </a>
              )}

              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform shadow-md"
                >
                  <FaTwitter className="text-lg" />
                </a>
              )}

              {discord && (
                <a
                  href={discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform shadow-md"
                >
                  <FaDiscord className="text-lg" />
                </a>
              )}

              {chat && (
                <a
                  href={chat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform shadow-md"
                >
                  <FaTelegram className="text-lg" />
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform shadow-md"
                >
                  <FaGithub className="text-lg" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinHeader;
