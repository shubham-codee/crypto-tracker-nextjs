import React from "react";
import Image from "next/image";
import {
  formatUSDNumber,
  formatNumber,
  formatUSDNumberWithoutRoundingOff,
} from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import FavouriteStar from "./FavouriteStar";
import { useUserStore } from "@/stores/userStore";

const DisplayRow = ({
  name,
  symbol,
  image,
  total_volume,
  current_price,
  market_cap,
  price_change_percentage_24h,
}: {
  name: string;
  symbol: string;
  image: string;
  total_volume: number;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}) => {
  const user = useUserStore((state) => state.user);

  return (
    <tr className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800">
      {user && (
        <td scope="row" className="pl-4 py-4">
          <FavouriteStar coinSymbol={symbol} />
        </td>
      )}
      <th
        scope="row"
        className="px-2 py-4 font-semibold text-black dark:text-slate-200 uppercase"
      >
        <Link href={`/coin/${symbol}`}>
          <Image
            src={image}
            height={40}
            width={40}
            alt={name}
            className="inline-block mr-2"
          />
          {name}
        </Link>
      </th>
      <td className="px-6 py-4 font-semibold text-black dark:text-slate-200">
        $
        {formatUSDNumberWithoutRoundingOff(
          parseFloat(formatNumber(current_price))
        )}
      </td>
      <td className="px-6 py-4 font-bold text-black dark:text-slate-200">
        {formatUSDNumber(total_volume)}
      </td>
      <td className="px-6 py-4 font-medium text-gray-500 dark:text-slate-400">
        $ {formatUSDNumber(market_cap)}
      </td>
      <td className="px-6 py-4">
        {price_change_percentage_24h > 0 ? (
          <TrendingUp
            size={24}
            className="inline mr-1 text-green-600 dark:text-emerald-400"
          />
        ) : (
          <TrendingDown
            size={24}
            className="inline mr-1 text-red-500 dark:text-red-400"
          />
        )}
        <span
          className={`${
            price_change_percentage_24h > 0
              ? "text-green-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          } font-medium`}
        >
          {formatNumber(price_change_percentage_24h)}%
        </span>
      </td>
    </tr>
  );
};

export default DisplayRow;
