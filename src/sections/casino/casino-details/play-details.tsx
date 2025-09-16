"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";
const TrophySVG = dynamic(
  () => import("@/components/common/svg_icons/troffee-svg")
);

function PlayDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [type, setType] = useState(searchParams.get("playReward") || "casino");

  const handleTypeChange = (value: string) => {
    setType(value);
    const params = new URLSearchParams(searchParams);
    params.set("playReward", value);
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.get("playReward")) {
      params.set("playReward", "casino");
      router.push(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  return (
    <div className="p-4 bg-background-1 rounded-lg flex flex-row items-start lg:items-center justify-start lg:justify-between gap-2 lg:gap-6">
      <div className="left flex flex-row items-center gap-2">
        <div className="text-foreground text-base font-semibold">
          Angel vs Sinner Eternal Battle Enhanced RTP
        </div>
        <div className="text-foreground/55 text-base font-normal">
          Pragmatic Play
        </div>
      </div>
      <Select value={type} onValueChange={handleTypeChange}>
        <SelectTrigger className="w-fit !h-10 rounded-md !bg-background-2">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            value="casino"
            className="flex flex-row items-center gap-2 text-sm font-normal text-foreground/55"
          >
            <TrophySVG /> 15,000,00x{" "}
            <span className="text-sm font-semibold text-foreground">
              VeeMay77
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default PlayDetails;
