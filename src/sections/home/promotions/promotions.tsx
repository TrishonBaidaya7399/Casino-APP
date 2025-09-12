import dynamic from "next/dynamic";
import React from "react";
const PromotionCadsCarousel = dynamic(
  () => import("./promotion-cards-carousel")
);

function Promotions() {
  return (
    <div className="">
      <PromotionCadsCarousel title="Promotions" items={promotions} />
    </div>
  );
}

export default Promotions;

const promotions: any[] = [
  {
    type: "Promotion",
    title: "Team Vitality",
    subTitle: "Kill Target Prize Pool",
    href: "#",
    image: "/promotions/promotion1.avif",
    _id: "1",
  },
  {
    type: "New Releases",
    title: "Angel vs Sinner",
    subTitle: "New Enhanced RTP game",
    href: "#",
    image: "/promotions/promotion2.avif",
    _id: "2",
  },
  {
    type: "Promotion",
    title: "Frankie's Ebor Raffle",
    subTitle: "Share in $40,000",
    href: "#",
    image: "/promotions/promotion3.avif",
    _id: "3",
  },
  {
    type: "Special Offer",
    title: "Golden Tournament",
    subTitle: "Win a $50,000 Jackpot",
    href: "#",
    image: "/promotions/promotion1.avif",
    _id: "4",
  },
];
