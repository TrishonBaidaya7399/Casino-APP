"use client"
import React from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useSearchParams } from "next/navigation";
const EditIcon = dynamic(
  () => import("@/components/common/svg_icons/player-controls/edit-icon")
);
const FavoriteIcon = dynamic(
  () => import("@/components/common/svg_icons/player-controls/favorite-icon")
);
const ProgressIcon = dynamic(
  () => import("@/components/common/svg_icons/player-controls/progress-icon")
);
const RedirectIcon = dynamic(
  () => import("@/components/common/svg_icons/player-controls/redirect-icon")
);
const ResizeIcon = dynamic(
  () => import("@/components/common/svg_icons/player-controls/resize-icon")
);
const GlobalTooltip = dynamic(
  () => import("@/components/global-components/global-tooltip")
);


function PlayerControls() {
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency") || "USD";
  const isFunPlay = searchParams.get("mode") === "fun";

  return (
    <div className="rounded-lg bg-background-1 p-4 flex flex-row items-center justify-between">
      <div className="left flex flex-row items-center gap-12">
        <div className="control_icons flex flex-row items-center gap-4">
          <GlobalTooltip tooltip="Resize player">
            <ResizeIcon />
          </GlobalTooltip>
          <GlobalTooltip tooltip="Edit">
            <EditIcon />
          </GlobalTooltip>
          <GlobalTooltip tooltip="View Progress">
            <ProgressIcon />
          </GlobalTooltip>
          <GlobalTooltip tooltip="Favorite">
            <FavoriteIcon />
          </GlobalTooltip>
          <GlobalTooltip tooltip="Redirect">
            <RedirectIcon />
          </GlobalTooltip>
        </div>
        <Select value={currency} disabled>
          <SelectTrigger className="w-30 h-10 flex items-center gap-1 text-sm text-foreground border-none bg-transparent">
            <div className="h-5 w-5 rounded-full bg-foreground/15 flex items-center justify-center">
              $
            </div>
            <SelectValue placeholder="Select" />
            <ChevronDown className="h-4 w-4" />
          </SelectTrigger>
          <SelectContent className="bg-background-2 border-none">
            <SelectItem value="USD" className="text-sm text-foreground/55">
              USD
            </SelectItem>
            <SelectItem value="EUR" className="text-sm text-foreground/55">
              EUR
            </SelectItem>
            <SelectItem value="GBP" className="text-sm text-foreground/55">
              GBP
            </SelectItem>
            <SelectItem value="BTC" className="text-sm text-foreground/55">
              BTC
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="right flex flex-row items-center gap-2 text-sm text-foreground">
        Fun Play
        <Switch
          checked={isFunPlay}
          disabled
          className={
            isFunPlay ? "bg-chart-2 data-[state=checked]:bg-foreground" : ""
          }
        />
        Real Play
      </div>
    </div>
  );
}

export default PlayerControls;
