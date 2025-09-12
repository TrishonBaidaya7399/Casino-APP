import dynamic from "next/dynamic";

const GlobalCadCarousel = dynamic(
  () => import("@/sections/home/game-card-carousel")
);

const GameAndSport = () => {
  return (
    <div className="">
      {/* trending games */}
      <GlobalCadCarousel title="Trending Games" items={trendingGames} />
      {/* trending sports */}
      <div className="pt-9">
        <GlobalCadCarousel title="Trending Sports" items={trendingSports} />
      </div>
    </div>
  );
};

export default GameAndSport;

const trendingGames: any[] = [
  {
    id: 1,
    src: "/TrendingGames/game01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 2,
    src: "/TrendingGames/game02.avif",
    alt: "Tennis",
    players: 2,
  },
  {
    id: 3,
    src: "/TrendingGames/game03.avif",
    alt: "Baseball",
    players: 18,
  },
  {
    id: 4,
    src: "/TrendingGames/game04.avif",
    alt: "Cricket",
    players: 22,
  },
  {
    id: 5,
    src: "/TrendingGames/game05.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 6,
    src: "/TrendingGames/game06.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 7,
    src: "/TrendingGames/game07.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 8,
    src: "/TrendingGames/game08.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 9,
    src: "/TrendingGames/game01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 10,
    src: "/TrendingGames/game02.avif",
    alt: "Tennis",
    players: 2,
  },
  {
    id: 11,
    src: "/TrendingGames/game03.avif",
    alt: "Baseball",
    players: 18,
  },
  {
    id: 12,
    src: "/TrendingGames/game04.avif",
    alt: "Cricket",
    players: 22,
  },
];
const trendingSports: any[] = [
  {
    id: 1,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
  },
  {
    id: 2,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
  },
  {
    id: 3,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
  },
  {
    id: 4,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
  },
  {
    id: 5,
    src: "/TrendingSports/sports05.avif",
    alt: "Basketball",
  },
  {
    id: 6,
    src: "/TrendingSports/sports06.avif",
    alt: "Basketball",
  },
  {
    id: 7,
    src: "/TrendingSports/sports07.avif",
    alt: "Basketball",
  },
  {
    id: 8,
    src: "/TrendingSports/sports08.avif",
    alt: "Basketball",
  },
  {
    id: 9,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
  },
  {
    id: 10,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
  },
  {
    id: 11,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
  },
  {
    id: 12,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
  },
];
