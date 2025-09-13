"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BetsTableTabs() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "casino";

  const tabs = [
    { value: "casino", label: "Casino Bets" },
    { value: "sports", label: "Sports Bets" },
    { value: "race-leaderboard", label: "Race Leaderboard" },
  ];

  return (
    <Tabs
      value={activeTab}
      className="w-full mb-2.5 bg-sidebar rounded-lg overflow-x-auto"
    >
      <TabsList className="grid grid-cols-3 bg-sidebar p-2 h-auto overflow-x-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} asChild>
            <Link
              scroll={false}
              href={`?tab=${tab.value}`}
              className="w-fit h-full flex items-center justify-center"
            >
              {tab.label}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
