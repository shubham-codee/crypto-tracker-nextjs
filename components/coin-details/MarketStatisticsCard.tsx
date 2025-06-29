import { formatNumber, formatUSDNumber, shortenNumber } from "@/lib/utils";
import React from "react";

interface MarketStatisticsCardProps {
  price_change_24h: number;
  price_change_7d: number;
  ath: number;
  atl: number;
  liquidity: number;
  total_supply: number;
}

function MarketStatisticsCard({
  price_change_24h,
  price_change_7d,
  ath,
  atl,
  liquidity,
  total_supply,
}: MarketStatisticsCardProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-10">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-slate-100 mb-6 text-center tracking-tight">
            Market Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-blue-400 dark:text-sky-400 text-3xl mb-2">
                🔄
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                24h Change
              </span>
              <span
                className={`text-xl font-bold ${
                  price_change_24h > 0
                    ? "text-green-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                } `}
              >
                {formatNumber(price_change_24h)}%
              </span>
            </div>
            <div className="bg-purple-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-purple-400 dark:text-purple-300 text-3xl mb-2">
                📈
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                7d Change
              </span>
              <span
                className={`text-xl font-bold ${
                  price_change_7d > 0
                    ? "text-green-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {formatNumber(price_change_7d)}%
              </span>
            </div>
            <div className="bg-pink-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-pink-400 dark:text-pink-300 text-3xl mb-2">
                🚀
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                All-Time High
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-slate-100">
                ${formatUSDNumber(ath)}
              </span>
            </div>
            <div className="bg-yellow-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-yellow-400 dark:text-yellow-300 text-3xl mb-2">
                🌙
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                All-Time Low
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-slate-100">
                ${formatUSDNumber(atl)}
              </span>
            </div>
            <div className="bg-green-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-green-400 dark:text-emerald-400 text-3xl mb-2">
                💧
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                Liquidity
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-slate-100">
                ${shortenNumber(liquidity)}
              </span>
            </div>
            <div className="bg-indigo-50 dark:bg-slate-700 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <span className="text-indigo-400 dark:text-indigo-300 text-3xl mb-2">
                🪙
              </span>
              <span className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-1">
                Total Supply
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-slate-100">
                {shortenNumber(total_supply)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketStatisticsCard;
