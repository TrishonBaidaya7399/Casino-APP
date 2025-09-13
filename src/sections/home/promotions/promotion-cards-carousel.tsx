"use client";

import GlobalSwiper from "@/components/global-components/swiper/global-swiper";
import dynamic from "next/dynamic";
const GameDetailsCard = dynamic(
  () => import("@/components/global-components/cards/game-details-card")
);
// const GlobalCarousel = dynamic(
//   () => import("../../../components/global-components/carousel/global-carousel")
// );

export interface GameData {
  src: string;
  alt: string;
  id: number;
  players?: number;
}

interface PromotionCadsCarouselProps {
  title: string;
  items: GameData[];
}

export default function PromotionCadsCarousel({
  title,
  items,
}: PromotionCadsCarouselProps) {
  const renderGameCard = (item: any) => (
    <GameDetailsCard
      type={item?.type}
      imageUrl={item?.image}
      title={item?.title}
      subTitle={item?.subTitle}
      href={item?.href}
    />
  );

  return (
    // <GlobalCarousel title={title} items={items} renderItem={renderGameCard} />
    <GlobalSwiper title={title} items={items} renderItem={renderGameCard} />
  );
}
