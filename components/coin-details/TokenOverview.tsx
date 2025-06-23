import { shortenNumber } from "@/lib/utils";
import React from "react";

function TokenOverview({
  market_cap,
  volume,
  price,
  circulating_supply,
}: {
  market_cap: number;
  volume: number;
  price: number;
  circulating_supply: number;
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-10 my-4">
        <div className="shadow-lg bg-white rounded-xl p-6 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-white/30 ">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-700/70">
              Market Cap
            </span>
            <span className="text-2xl font-bold text-gray-900 drop-shadow">
              ${shortenNumber(market_cap)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-2 rounded-full bg-gradient-to-r from-slate-800 via-slate-200 to-slate-800 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-700/70">
              24h Volume
            </span>
            <span className="text-2xl font-bold text-gray-900 drop-shadow">
              ${shortenNumber(volume)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-2 rounded-full bg-gradient-to-r from-green-400 via-green-200 to-green-400 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-700/70">
              Price
            </span>
            <span className="text-2xl font-bold text-gray-900 drop-shadow">
              ${shortenNumber(price)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 mb-2" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-700/70">
              Circulating Supply
            </span>
            <span className="text-2xl font-bold text-gray-900 drop-shadow">
              {shortenNumber(circulating_supply)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenOverview;
