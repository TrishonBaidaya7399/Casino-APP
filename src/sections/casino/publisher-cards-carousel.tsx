"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import casinoMockData from "@/data/casino-page-data.json";
const GlobalCarousel = dynamic(
  () => import("@/components/global-components/carousel/global-carousel")
);
const PlayerStatus = dynamic(
  () => import("@/components/global-components/player-status")
);

export interface GameData {
  type?: string;
  image: string;
  title: string;
  subTitle: string;
  href?: string;
  playNow?: boolean;
}

export default function PublisherCardsCarousel() {
  const publishers = casinoMockData?.publishers;
  const renderGameCard = (publisher: any) => (
    <div className="flex flex-col gap-2">
      <div className="h-15 w-full min-w-35 rounded-lg bg-sidebar">
        <Image
          height={60}
          width={143}
          src={publisher?.img}
          alt={publisher?.name}
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
      <PlayerStatus players={publisher?.players} />
    </div>
  );

  return (
    <GlobalCarousel
      title="Publishers"
      items={publishers}
      renderItem={renderGameCard}
    />
  );
}
