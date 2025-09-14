import dynamic from "next/dynamic";
import casinoMockData from "@/data/casino-page-data.json";

const GlobalCadCarousel = dynamic(
  () => import("@/sections/home/games-and-sports/game-card-carousel")
);

const LiveCasino = () => {
  const liveCasino = casinoMockData?.liveCasino;
  return (
    <div className="w-full">
      {/* Live Casino */}
      <GlobalCadCarousel title="Live Casino" items={liveCasino} />
    </div>
  );
};

export default LiveCasino;
