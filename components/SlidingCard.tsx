"use client";

import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";
import {
  animate,
  motion,
  useMotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import BitcoinSpinner from "./BitcoinSpinner";

const SlidingCard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const x = useMotionValue("-50%");
  const [controls, setControls] = useState<
    AnimationPlaybackControls | undefined
  >(undefined);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.mobula.io/api/1/market/query?limit=10&sortBy=market_cap&sortOrder=desc",
          {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_MOBULA_API!,
            },
          }
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoins();

    const animationControls = animate(x, ["-50%", "0%"], {
      duration: 50,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    setControls(animationControls);
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl font-bold -mb-10 mt-6">Top Trends</h2>
      <div
        className={`h-70 flex ${
          loading ? "justify-center" : ""
        } items-center mx-auto w-screen md:w-3/4 overflow-hidden`}
      >
        {loading ? (
          <BitcoinSpinner size={60} />
        ) : (
          <motion.div
            className="grid grid-flow-col grid-rows-1 gap-4"
            style={{ x }}
            onMouseEnter={() => controls?.pause()}
            onMouseLeave={() => controls?.play()}
          >
            {coins.map(
              ({
                id,
                name,
                symbol,
                logo: image,
                price: current_price,
                price_change_24h: price_change_percentage_24h,
              }: {
                id: string;
                name: string;
                symbol: string;
                logo: string;
                price: number;
                price_change_24h: number;
                high: number;
                low: number;
              }) => (
                <CoinCard
                  key={id}
                  name={name}
                  symbol={symbol}
                  image={image}
                  current_price={current_price}
                  price_change_percentage_24h={price_change_percentage_24h}
                />
              )
            )}
            {coins.map(
              ({
                id,
                name,
                symbol,
                logo: image,
                price: current_price,
                price_change_24h: price_change_percentage_24h,
              }: {
                id: string;
                name: string;
                symbol: string;
                logo: string;
                price: number;
                price_change_24h: number;
                high: number;
                low: number;
              }) => (
                <CoinCard
                  key={id}
                  name={name}
                  symbol={symbol}
                  image={image}
                  current_price={current_price}
                  price_change_percentage_24h={price_change_percentage_24h}
                />
              )
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SlidingCard;
