import React from "react";
import ImageMarquee from "./ImageMarquee";

function HeroSectionText() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-3/4">
        <div className="bg-[#F2F3F5]  py-16 min-w-1/2">
          <div className="mx-auto py-20 px-4 text-center bg-gray-100">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Middle East Leadger <br /> in Market and OTC transactions
            </h1>
            <p className="text-gray-800 font-semibold mb-8">
              Track your favputite{" "}
              <span className="font-bold">CryptoCoins</span> on the go all{" "}
              <br />
              at one place with a wide variety of exachanges
            </p>
            <button className="bg-black text-white font-semibold px-6 py-2 rounded">
              Learn More
            </button>
          </div>
          <div className="bg-white py-4">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8 px-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">10K+</h2>
                <p className="text-sm text-gray-600">
                  Total
                  <br />
                  Digital Assets
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">150+</h2>
                <p className="text-sm text-gray-600">
                  International Exchanges
                  <br />
                  All Over The World
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">$5B+</h2>
                <p className="text-sm text-gray-600">
                  Total Number Of Funds
                  <br />
                  Secured With Us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DDE0E4] min-w-1/2 min-h-3/4 py-16 md:pt-16 flex align-middle">
          <ImageMarquee />
        </div>
      </div>
    </>
  );
}

export default HeroSectionText;
