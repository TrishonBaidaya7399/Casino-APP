"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
      <TabsList className="grid grid-cols-3 bg-sidebar p-2 h-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <Link
              key={tab.value}
              scroll={false}
              href={`?tab=${tab.value}`}
              className={cn(
                "w-fit h-full flex items-center justify-center rounded-md px-4 py-1 text-sm font-medium",
                isActive
                  ? "bg-foreground/15 text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
