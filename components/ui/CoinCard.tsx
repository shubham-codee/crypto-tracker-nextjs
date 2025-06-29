import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoinCard = ({
  name,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}: {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}) => {
  return (
    <>
      <div className="border flex flex-col h-32 w-80 p-2 justify-around rounded-xl border-b-6 border-r-6 border-t-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <Link href={`/coin/${symbol}`}>
          <div className="flex items-center justify-start ml-auto">
            <Image src={image} height={40} width={40} alt={name} />
            <div className="mx-2 text-lg font-bold text-slate-800 dark:text-slate-200">
              {symbol.toLocaleUpperCase()}
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 h-10 p-2 rounded-sm text-slate-700 dark:text-slate-200">
              {name}
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              price:{" "}
            </span>
            $
            <span className="text-slate-800 dark:text-slate-200">
              {formatNumber(current_price)}
            </span>
          </div>
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              change:{" "}
            </span>
            <span
              className={`${
                price_change_percentage_24h > 0
                  ? "text-green-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              } `}
            >
              {formatNumber(price_change_percentage_24h)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
