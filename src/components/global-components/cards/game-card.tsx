import Image from "next/image";
import React from "react";
import PlayerStatus from "../player-status";
import Link from "next/link";

function GameCard({
  src = "/default.webp",
  alt = "game card",
  width = 143,
  height = 188,
  id,
  type,
  players,
}: {
  src: string;
  alt: string;
  type?: string;
  width?: number;
  height?: number;
  id: number;
  players?: number;
}) {
  return (
    <div>
      <Link href={type !== "sport" ? `/game/id` : `/sport/id`}>
        <div className="relative flex flex-col gap-2 w-35.75 m:w-31.75 h-auto">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL="/default.webp"
            className="rounded-lg"
          />
          {id && (
            <div className="w-8 h-8 rounded-full bg-background text-foreground absolute top-1.5 left-1.5 font-semibold text-base flex items-center justify-center">
              {id}
            </div>
          )}
          {players && players > 0 && (
            <PlayerStatus key={id} players={players} />
          )}
        </div>
      </Link>
    </div>
  );
}

export default GameCard;
