"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabProps {
  value: string;
  label: string;
}

export function GlobalTabs({
  data,
  tabName = "tab",
}: {
  data: TabProps[];
  tabName?: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get(tabName) || data[0]?.value;

  useEffect(() => {
    if (!searchParams.get(tabName) && data.length > 0) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set(tabName, data[0].value);
      router.push(`?${current.toString()}`, { scroll: false });
    }
  }, [searchParams, router, data, tabName]);

  return (
    <Tabs
      value={activeTab}
      className="w-full mb-2.5 bg-sidebar rounded-lg overflow-x-auto"
    >
      <TabsList className="flex flex-row items-center gap-3 bg-sidebar p-2 h-auto overflow-x-auto">
        {data.map((tab) => {
          const currentParams = new URLSearchParams(
            Array.from(searchParams.entries())
          );
          currentParams.set(tabName, tab.value); // Update only this tabName
          return (
            <TabsTrigger key={tab.value} value={tab.value} asChild>
              <Link
                scroll={false}
                href={`?${currentParams.toString()}`}
                className="w-fit h-full flex items-center justify-center"
              >
                {tab.label}
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
