import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/sections/home/hero-section"));
const GameAndSport = dynamic(() => import("@/sections/home/game-and-sport"));

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
    </div>
  );
}
