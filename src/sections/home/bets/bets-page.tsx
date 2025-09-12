"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GlobalTable } from "@/components/global-components/global-table/global-table";
import { BetData } from "@/types/bets-table-types";
import { BetsTableTabs } from "./bets-table-tabs";
import dayjs from "dayjs";
import { ColumnType } from "@/types/global-table-types";
import PointerIcon from "@/components/common/svg_icons/PointerIcon";
import BitCoinSVG from "@/components/common/svg_icons/BitCoinSVG";
import EthereumSVG from "@/components/common/svg_icons/EthereumSVG";

const renderPayout = (row: BetData) => {
  const payoutValue = parseFloat(row.payout.replace(/[$,]/g, ""));
  const isPositive = payoutValue >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 ${
        isPositive ? "text-success" : "text-destructive"
      } font-semibold`}
    >
      {row.payout}
      {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
    </span>
  );
};

const renderBetAmount = (row: BetData) => {
  const betValue = parseFloat(row.betAmount.replace(/[$,]/g, ""));
  const isPositive = betValue >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 ${
        isPositive ? "text-success" : "text-destructive"
      } font-semibold"`}
    >
      {row.betAmount}
      {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
    </span>
  );
};

const renderMultiplier = (row: BetData) => (
  <span className="text-foreground font-medium">{row.multiplier}</span>
);

export default function BetsTable() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "casino";
  const [data, setData] = useState<BetData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bets-table-mockdata.json");
        if (!response.ok) {
          throw new Error("Failed to fetch mock data");
        }
        const allData = await response.json();
        const tabData = allData[tab] || [];
        setData(tabData);
      } catch (error) {
        console.error("Error fetching mock data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tab]);

  const columns: ColumnType<BetData>[] = [
    {
      key: "game",
      label: "Game",
      render: (row: any) => (
        <span className="font-medium inline-flex items-center gap-1">
          <PointerIcon />
          {row.game}
        </span>
      ),
    },
    {
      key: "user",
      label: "User",
      render: (row: any) => (
        <span className="font-medium inline-flex items-center gap-1">
          <PointerIcon />
          {row.user}
        </span>
      ),
    },
    {
      key: "time",
      label: "Time",
      render: (row: any) => (
        <span className="font-medium">{dayjs(row.time).format("hh:mm A")}</span>
      ),
    },
    {
      key: "betAmount",
      label: "Bet Amount",
      render: renderBetAmount,
    },
    {
      key: "multiplier",
      label: "Multiplier",
      render: renderMultiplier,
    },
    {
      key: "payout",
      label: "Payout",
      render: renderPayout,
    },
  ];

  return (
    <div className="w-full">
      <BetsTableTabs />
      <div id="bets">
        <GlobalTable<BetData>
          columns={columns}
          data={data}
          loading={loading}
          emptyMessage={`No ${tab.replace("-", " ")} bets found.`}
          maxHeight={440}
        />
      </div>
    </div>
  );
}
