"use client";

import GlobalSwiper from "@/components/global-components/swiper/global-swiper";
import dynamic from "next/dynamic";
const GameCard = dynamic(() => import("../../../components/global-components/cards/game-card"));
const GlobalCarousel = dynamic(() => import("../../../components/global-components/carousel/global-carousel"));

export interface GameData {
  src: string;
  alt: string;
  id: number;
  players?: number;
}

interface GlobalCadCarouselProps {
  title: string;
  items: GameData[];
}

export default function GlobalCadCarousel({
  title,
  items,
}: GlobalCadCarouselProps) {
  const renderGameCard = (item: any) => (
    <GameCard
      key={item.id}
      src={item.src}
      alt={item.alt}
      id={item.id}
      players={item.players}
      width={143}
      height={188}
    />
  );

  return (
    <div className="w-full">
      {/* <GlobalCarousel title={title} items={items} renderItem={renderGameCard} /> */}
      <GlobalSwiper title={title} items={items} renderItem={renderGameCard} />
    </div>
  );
}
