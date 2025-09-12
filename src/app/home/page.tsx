import Promotions from "@/sections/home/promotions/promotions";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/sections/home/hero-section"));
const GameAndSport = dynamic(() => import("@/sections/home/games-and-sports/game-and-sport"));

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="w-full pt-8">
        <HeroSection />
      </div>

      {/* game and sport section */}
      <div className="w-full pt-9">
        <GameAndSport />
      </div>

      {/* promotions section */}
      {/* <div className="w-full pt-9">
        <Promotions />
      </div> */}

    </div>
  );
}
