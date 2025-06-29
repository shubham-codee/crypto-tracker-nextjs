"use client";

import React, { useState, useEffect } from "react";
import DisplayRow from "../ui/DisplayRow";
import PaginationButtons from "../ui/PaginationButtons";
import BitcoinSpinner from "../ui/BitcoinSpinner";
import { useUserStore } from "@/stores/userStore";

const DisplayTable = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const user = useUserStore((state) => state.user);

  const onPageChange = (page: number) => {
    const currOffset = (page - 1) * 20;
    setCurrentPage(page);
    setOffset(currOffset);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(
        `https://api.mobula.io/api/1/market/query?limit=80&sortBy=market_cap&sortOrder=desc`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_MOBULA_API!,
          },
        }
      );
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      <div className="w-screen md:w-4/5 mx-auto shadow-md overflow-x-auto rounded-lg my-5">
        <table className="w-full text-md text-left text-gray-500 dark:text-slate-300 table-auto">
          <thead className="text-sm text-gray-800 dark:text-slate-200 uppercase bg-gray-200 dark:bg-slate-800 h-12">
            <tr>
              {user && <th scope="col" className="px-6 py-3"></th>}
              <th scope="col" className="px-6 py-3">
                COIN
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL VOLUME
              </th>
              <th scope="col" className="px-6 py-3">
                MARKET CAP
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE CHANGE
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>
                  <BitcoinSpinner size={60} />
                </td>
              </tr>
            ) : (
              data
                .slice(offset, offset + 20)
                .map(
                  ({
                    id,
                    name,
                    symbol,
                    logo: image,
                    volume: total_volume,
                    price: current_price,
                    market_cap,
                    price_change_24h: price_change_percentage_24h,
                  }: {
                    id: string;
                    name: string;
                    symbol: string;
                    logo: string;
                    volume: number;
                    price: number;
                    market_cap: number;
                    price_change_24h: number;
                  }) => (
                    <DisplayRow
                      key={id}
                      name={name}
                      symbol={symbol}
                      image={image}
                      total_volume={total_volume}
                      current_price={current_price}
                      market_cap={market_cap}
                      price_change_percentage_24h={price_change_percentage_24h}
                    />
                  )
                )
            )}
          </tbody>
        </table>
      </div>
      <PaginationButtons
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default DisplayTable;
