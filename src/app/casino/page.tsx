import React from "react";
import dynamic from "next/dynamic";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";
const TopCardSlider = dynamic(
  () => import("@/sections/casino/top-card-slider")
);
const SearchBar = dynamic(
  () => import("@/components/common/search-bar/search-bar")
);
const BranchAndSlots = dynamic(
  () => import("@/sections/casino/brad-and-slots")
);
const PublisherCardsCarousel = dynamic(
  () => import("@/sections/casino/publisher-cards-carousel")
);
const LiveCasino = dynamic(() => import("@/sections/casino/live-casino"));
const CasinoBetsTable = dynamic(
  () => import("@/sections/casino/casino-bets-table")
);

const tabs = [
  { value: "lobby", label: "Lobby" },
  { value: "new-release", label: "New Release" },
  { value: "stack-originals", label: "Stake Originals" },
  { value: "slot", label: "Slot" },
  { value: "live-casino", label: "Live Casino" },
  { value: "stack-exclusive", label: "Stake Exclusive" },
  { value: "stack-engine", label: "Stake Engine" },
];

function CasinoPage() {
  return (
    <div className="pt-6">
      <TopCardSlider />
      <div className="py-6">
        <SearchBar tab={false} />
      </div>
      <div className="pb-2.5">
        <GlobalTabs data={tabs} />
      </div>
      <div className="pb-2.5">
        <BranchAndSlots />
      </div>
      <div className="py-9">
        <PublisherCardsCarousel />
      </div>
      <div className="pb-9">
        <LiveCasino />
      </div>
      <div className="pb-9">
        <CasinoBetsTable />
      </div>
    </div>
  );
}

export default CasinoPage;
