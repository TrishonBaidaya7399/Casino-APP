import GameAndSport from "@/sections/home/game-and-sport";
import HeroSection from "@/sections/home/hero-section";

export default function HomePage() {
  return (
  <div className="w-full">
    <div className="w-full pt-8">
        <HeroSection/>
    </div>

    {/* game and sport section */}
    <div className="w-full pt-14">
        <GameAndSport/>
    </div>

  </div>
  );
}
