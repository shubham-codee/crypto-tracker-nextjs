"use client";

import { CandlestickSeries, createChart } from "lightweight-charts";
import type { CandlestickData } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function CoinCandleChart({ data }: { data: CandlestickData[] }) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      autoSize: true,
      height: 600,
    });

    const candleSeries = chart.addSeries(CandlestickSeries);
    candleSeries.setData(data);

    return () => {
      chart.remove();
    };
  }, [data]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 my-4">
        <div
          ref={chartContainerRef}
          className="rounded-xl overflow-hidden shadow-xl"
        ></div>
      </div>
    </>
  );
}

export default CoinCandleChart;
