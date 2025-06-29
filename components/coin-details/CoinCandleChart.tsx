"use client";

import { useThemeStore } from "@/stores/themeStore";
import { CandlestickSeries, createChart } from "lightweight-charts";
import type { CandlestickData } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function CoinCandleChart({ data }: { data: CandlestickData[] }) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const theme = useThemeStore((state) => state.theme);

  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (!chartContainerRef.current) return;

    const chartOptions =
      theme != "auto"
        ? theme == "dark"
          ? {
              autoSize: true,
              height: 600,
              layout: {
                textColor: "white",
                background: { color: "black" },
              },
            }
          : {
              autoSize: true,
              height: 600,
            }
        : mediaQuery.matches
        ? {
            autoSize: true,
            height: 600,
            layout: {
              textColor: "white",
              background: { color: "black" },
            },
          }
        : {
            autoSize: true,
            height: 600,
          };

    const chart = createChart(chartContainerRef.current, chartOptions);

    const candleSeries = chart.addSeries(CandlestickSeries);
    candleSeries.setData(data);

    return () => {
      chart.remove();
    };
  }, [data, theme]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 my-4">
        <div
          ref={chartContainerRef}
          className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-slate-900"
        ></div>
      </div>
    </>
  );
}

export default CoinCandleChart;
