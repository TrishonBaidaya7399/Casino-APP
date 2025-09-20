"use client";

import { GlobalTabs } from "@/components/global-components/GlobalTabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

interface OverviewTabProps {
  onTabChange: (tab: string) => void;
}

export default function OverviewTab({ onTabChange }: OverviewTabProps) {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
  //   searchParams.get("walletTabs")
  // );
  return (
    <div className="flex flex-col">
      <GlobalTabs
        data={[
          { value: "overview", label: "Overview" },
          { value: "buyCrypto", label: "Buy Crypto" },
          { value: "settings", label: "Settings" },
        ]}
        tabName="walletTabs"
      />
      <div className="flex flex-col pb-2 px-4">
        <div className="text-foreground/55 text-base">Balance</div>
        <div className="text-foreground text-xl font-semibold">$0.04</div>
      </div>
      <div className="flex flex-col gap-3.5 pb-8">
        <div className="flex flex-row items-center gap-6 justify-between pb-1 px-4">
          <div className="text-foreground/55 text-base">Currency</div>
          <div className="text-foreground/55 text-base">Value</div>
        </div>
        <div className="bg-sidebar p-4 rounded-lg flex flex-row items-center justify-between gap-6">
          <div className="left flex flex-row gap-2 items-center">
            <Image
              src="/icons/bit-coin-svg.svg"
              alt="pointer"
              height={24}
              width={24}
            />
            <div className="flex flex-col gap-1 5">
              <div className="text-base font-semibold text-foreground">BTC</div>
              <div className="text-sm font-normal text-foreground/55">
                Bitcoin
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 5">
            <div className="text-base font-semibold text-foreground">
              0.00000033
            </div>
            <div className="text-sm font-normal text-foreground/55">
              $0.04 USD
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 mb-14">
        <Button
          onClick={() => onTabChange("withdraw")}
          className="w-full "
          variant="outline"
        >
          Withdraw
        </Button>
        <Button
          variant="orangeGradient"
          onClick={() => onTabChange("deposit")}
          className="w-full "
        >
          Deposit
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button variant="gray" className="w-full ">
          Enable 2FA
        </Button>
        <div className="text-sm font-normal text-foreground/55">
          Improve your account security with Two-Factor Authentication
        </div>
      </div>
    </div>
  );
}
