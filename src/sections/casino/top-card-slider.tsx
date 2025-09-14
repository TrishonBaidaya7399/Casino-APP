import React from "react";
import dynamic from "next/dynamic";
const TopCardsCarousel = dynamic(() => import("./top-card-carousel"));
import casinoMockData from "@/data/casino-page-data.json";

async function TopCardSlider() {
  //   const response = await fetch(
  //     "http://localhost:3000/casino-page-data.json",
  //     {
  //       cache: "no-store",
  //       next: { revalidate: 60 },
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch promotions data");
  //   }
  //   const promotions = await response.json();

  return (
    <div className="">
      <TopCardsCarousel
        title="Promotions"
        items={casinoMockData?.casinoPromotions}
      />
    </div>
  );
}

export default TopCardSlider;
