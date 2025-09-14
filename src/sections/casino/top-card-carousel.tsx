"use client";

import dynamic from "next/dynamic";
const GlobalCarousel = dynamic(
  () => import("@/components/global-components/carousel/global-carousel")
);
const GameDetailsCard = dynamic(
  () => import("@/components/global-components/cards/game-details-card")
);

export interface GameData {
  type?: string;
  image: string;
  title: string;
  subTitle: string;
  href?: string;
  playNow?: boolean;
}

interface TopCardsCarouselProps {
  title: string;
  items: GameData[];
}

export default function TopCardsCarousel({
  title,
  items,
}: TopCardsCarouselProps) {
  const renderGameCard = (item: any) => (
    <GameDetailsCard
      type={item?.type}
      imageUrl={item?.image}
      title={item?.title}
      subTitle={item?.subTitle}
      href={item?.href}
      playNow={item?.playNow}
    />
  );

  return (
    <GlobalCarousel title={title} items={items} renderItem={renderGameCard} />
  );
}
