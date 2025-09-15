import dynamic from "next/dynamic";

const GlobalCadCarousel = dynamic(
  () => import("@/sections/home/games-and-sports/game-card-carousel")
);

const trendingSports: any[] = [
  {
    id: 1,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 2,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
    players: 22,
  },
  {
    id: 3,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
    players: 22,
  },
  {
    id: 4,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
    players: 22,
  },
  {
    id: 5,
    src: "/TrendingSports/sports05.avif",
    alt: "Basketball",
    players: 22,
  },
  {
    id: 6,
    src: "/TrendingSports/sports06.avif",
    alt: "Basketball",
    players: 22,
  },
  {
    id: 7,
    src: "/TrendingSports/sports07.avif",
    alt: "Basketball",
    players: 22,
  },
  {
    id: 8,
    src: "/TrendingSports/sports08.avif",
    alt: "Basketball",
    players: 22,
  },
  {
    id: 9,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 10,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
    players: 22,
  },
  {
    id: 11,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
    players: 22,
  },
  {
    id: 12,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
    players: 22,
  },
];

const SlotSection = () => {
  return (
    <div className="w-full">
      {/* Slots */}
      <div className="pt-9">
        <GlobalCadCarousel title="Slots" items={trendingSports} />
      </div>
    </div>
  );
};

export default SlotSection;
