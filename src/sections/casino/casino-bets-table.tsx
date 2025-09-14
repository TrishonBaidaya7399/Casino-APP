"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import Image from "next/image";
import type { ColumnType } from "@/types/global-table-types";
import { GlobalTable } from "@/components/global-components/global-table/global-table";
import type { BetData } from "@/types/bets-table-types";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";

const renderPayout = (row: BetData) => {
  const payoutValue = parseFloat(row.payout.replace(/[$,]/g, ""));
  const isPositive = payoutValue >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 ${
        isPositive ? "!text-green-500" : "text-destructive"
      } font-semibold`}
    >
      {row.payout}
      {row.type === "bitcoin" ? (
        <Image
          src="/icons/bit-coin-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : row.type === "ethereum" ? (
        <Image
          src="/icons/ethereum-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : row.type === "binance" ? (
        <Image
          src="/icons/binance-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : (
        <Image
          src="/icons/pointer-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      )}
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
      {row.type === "bitcoin" ? (
        <Image
          src="/icons/bit-coin-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : row.type === "ethereum" ? (
        <Image
          src="/icons/ethereum-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : row.type === "binance" ? (
        <Image
          src="/icons/binance-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      ) : (
        <Image
          src="/icons/pointer-svg.svg"
          alt="pointer"
          height={16}
          width={16}
        />
      )}
    </span>
  );
};

const renderMultiplier = (row: BetData) => (
  <span className="text-foreground font-medium">{row.multiplier}</span>
);

export default function CasinoBetsTable() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tabName") || "myBets";
  const [data, setData] = useState<BetData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/casino-bets-table-mockdata.json");
        if (!response.ok) {
          throw new Error("Failed to fetch mock data");
        }
        const allData = await response.json();
        const tabData = allData?.[tab] || [];
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

  const desktopColumns: ColumnType<BetData>[] = [
    {
      key: "game",
      label: "Game",
      render: (row: any) => (
        <span className="font-medium inline-flex items-center gap-1">
          <Image
            src="/icons/pointer-svg.svg"
            alt="pointer"
            height={16}
            width={16}
          />
          {row.game}
        </span>
      ),
    },
    {
      key: "user",
      label: "User",
      render: (row: any) => (
        <span className="font-medium inline-flex items-center gap-1">
          <Image
            src="/icons/pointer-svg.svg"
            alt="pointer"
            height={16}
            width={16}
          />
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
      align: "right",
      render: renderPayout,
    },
  ];
  const mobileColumns: ColumnType<BetData>[] = [
    {
      key: "game",
      label: "Game",
      render: (row: any) => (
        <span className="font-medium inline-flex items-center gap-1">
          <Image
            src="/icons/pointer-svg.svg"
            alt="pointer"
            height={16}
            width={16}
          />
          {row.game}
        </span>
      ),
    },

    {
      key: "payout",
      label: "Payout",
      align: "right",
      render: renderPayout,
    },
  ];
  const tableTabs = [
    { value: "myBets", label: "My Bets" },
    { value: "allBets", label: "All Bets" },
    { value: "highRollers", label: "High Rollers" },
    { value: "raceLeaderBoard", label: "Race LeaderBoard" },
  ];
  return (
    <div className="w-full">
      <GlobalTabs data={tableTabs} tabName="tabName" />
      <div className="hidden md:block">
        <GlobalTable<BetData>
          columns={desktopColumns}
          data={data}
          loading={loading}
          emptyMessage={`No ${tab?.replace("-", " ")} bets found.`}
          maxHeight={440}
        />
      </div>
      <div className="block md:hidden">
        <GlobalTable<BetData>
          columns={mobileColumns}
          data={data}
          loading={loading}
          emptyMessage={`No ${tab?.replace("-", " ")} bets found.`}
          maxHeight={440}
        />
      </div>
    </div>
  );
}
