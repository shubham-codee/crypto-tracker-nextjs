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
  return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50">
      <td scope="row" className="pl-4 py-4">
        <FavouriteStar coinSymbol={symbol} />
      </td>
      <th scope="row" className="px-2 py-4 font-semibold text-black uppercase">
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
      <td className="px-6 py-4 font-semibold text-black">
        $
        {formatUSDNumberWithoutRoundingOff(
          parseFloat(formatNumber(current_price))
        )}
      </td>
      <td className="px-6 py-4 font-bold text-black">
        {formatUSDNumber(total_volume)}
      </td>
      <td className="px-6 py-4 font-medium text-gray-500">
        $ {formatUSDNumber(market_cap)}
      </td>
      <td className="px-6 py-4">
        {price_change_percentage_24h > 0 ? (
          <TrendingUp size={24} className="inline mr-1 text-green-600" />
        ) : (
          <TrendingDown size={24} className="inline mr-1 text-red-500" />
        )}
        <span
          className={`${
            price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"
          } font-medium`}
        >
          {formatNumber(price_change_percentage_24h)}%
        </span>
      </td>
    </tr>
  );
};

export default DisplayRow;
