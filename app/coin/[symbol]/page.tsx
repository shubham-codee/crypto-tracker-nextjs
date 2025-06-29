import CoinCandleChart from "@/components/coin-details/CoinCandleChart";
import CoinHeader from "@/components/coin-details/CoinHeader";
import MarketStatisticsCard from "@/components/coin-details/MarketStatisticsCard";
import TokenDescriptionCard from "@/components/coin-details/TokenDescriptionCard";
import TokenOverview from "@/components/coin-details/TokenOverview";
import React from "react";

interface CandleApiData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

async function Page({ params }: { params: Promise<{ symbol: string }> }) {
  const symbol = (await params).symbol

  const [res1, res2, res3] = await Promise.all([
    fetch(`https://api.mobula.io/api/1/market/data?symbol=${symbol}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_MOBULA_API!,
      },
    }),
    fetch(`https://api.mobula.io/api/1/metadata?symbol=${symbol}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_MOBULA_API!,
      },
    }),
    fetch(
      `https://api.mobula.io/api/1/market/history/pair?symbol=${symbol}&period=7d`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_MOBULA_API!,
        },
      }
    ),
  ]);
  const [{ data: data1 }, { data: data2 }, { data: data3 }] = await Promise.all(
    [res1.json(), res2.json(), res3.json()]
  );

  const {
    name,
    logo,
    rank,
    market_cap,
    volume,
    price,
    circulating_supply,
    price_change_24h,
    price_change_7d,
    ath,
    atl,
    liquidity,
    total_supply,
  } = data1;
  const { website, discord, chat, twitter, github, description } = data2;

  const formattedData = data3.map((item: CandleApiData) => ({
    time: Math.floor(item.time / 1000),
    open: item.open,
    high: item.high,
    low: item.low,
    close: item.close,
  }));

  return (
    <>
      <div className="bg-gray-100 dark:bg-slate-900 py-6">
        <CoinHeader
          name={name}
          logo={logo}
          rank={rank}
          website={website}
          discord={discord}
          chat={chat}
          twitter={twitter}
          github={github}
        />
        <TokenOverview
          market_cap={market_cap}
          volume={volume}
          price={price}
          circulating_supply={circulating_supply}
        />
        <CoinCandleChart data={formattedData} />
        <MarketStatisticsCard
          price_change_24h={price_change_24h}
          price_change_7d={price_change_7d}
          atl={atl}
          ath={ath}
          liquidity={liquidity}
          total_supply={total_supply}
        />
        <TokenDescriptionCard
          title={`What is ${name}?`}
          description={description}
          website={website}
        />
      </div>
    </>
  );
}

export default Page;
