import dynamic from "next/dynamic";
import HeroSection from "@/sections/home/hero-section";
const SearchBar = dynamic(
  () => import("@/components/common/search-bar/search-bar")
);
const GameAndSport = dynamic(
  () => import("@/sections/home/games-and-sports/game-and-sport")
);
const Promotions = dynamic(
  () => import("@/sections/home/promotions/promotions")
);
const BetsTable = dynamic(() => import("@/sections/home/bets/bets-page"));
const Question = dynamic(() => import("@/sections/home/questions/question"));

export default function HomePage() {
  return (
    <div className="app-container">
      <div className="w-full pt-8">
        <HeroSection />
      </div>
      {/* top search panel */}
      <div className="w-full pt-9">
        <SearchBar />
      </div>

      {/* game and sport section */}
      <div className="w-full pt-6">
        <GameAndSport />
      </div>

      {/* promotions section */}
      <div className="w-full pt-9">
        <Promotions />
      </div>
      {/* bets table section */}
      <div className="w-full pt-9">
        <BetsTable />
      </div>
      {/* bets table section */}
      <div className="w-full py-9">
        <Question />
      </div>
    </div>
  );
}
