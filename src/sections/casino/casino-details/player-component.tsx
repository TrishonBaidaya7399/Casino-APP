import React from "react";
import dynamic from "next/dynamic";
const PlayIcon = dynamic(
  () => import("@/components/common/svg_icons/play-icon")
);

function PlayerComponent() {
  return (
    <div className="relative">
      <div className="player bg-background-2 rounded-lg h-40 lg:h-120 w-full" />
      <div className="play_button h-15 lg:h-20 w-15 lg:w-20 bg-foreground/15 p-3 lg:p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-chart-2 duration-300">
        <PlayIcon />
      </div>
    </div>
  );
}

export default PlayerComponent;
