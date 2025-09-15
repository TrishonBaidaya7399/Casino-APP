import React from "react";
import dynamic from "next/dynamic";
const SlotSection = dynamic(
  () => import("@/sections/game/game-details/slot-section")
);
const PublisherCardsCarousel = dynamic(
  () => import("@/sections/casino/publisher-cards-carousel")
);
const CasinoBetsTable = dynamic(
  () => import("@/sections/casino/casino-bets-table")
);

function GameDetailsPage({ id }: { id: string }) {
  console.log({ GameDetailsId: id });
  return (
    <div className="pt-6">
      <div className="pb-2.5">
        <SlotSection />
      </div>
      <div className="py-9">
        <PublisherCardsCarousel />
      </div>
      <div className="pb-9">
        <CasinoBetsTable gameDetails/>
      </div>
    </div>
  );
}

export default GameDetailsPage;
