import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function GameDetailsCard({
  type,
  title,
  subTitle,
  href,
  imageUrl,
  playNow,
}: {
  type?: string;
  title: string;
  subTitle: string;
  href?: string;
  imageUrl: string;
  playNow?: boolean;
}) {
  return (
    <div>
      <div className="w-full h-full min-w-98 max-h-47 rounded-lg bg-sidebar p-6 flex flex-row gap-3 justify-between items-center">
        <div className="left flex flex-col justify-between h-full min-h-35">
          <div className="flex flex-col gap-3">
            {type && (
              <div className="capitalize badge px-2 py-1 rounded-full bg-foreground/15 text-xs w-fit font-normal text-foreground">
                {type}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <div className="capitalize text-base text-foreground font-semibold">
                {title || "unknown"}
              </div>
              <div className="capitalize text-sm text-foreground-muted font-normal">
                {subTitle || "unknown"}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            {playNow && (
              <Button variant="outline" className="bg-background text-nowrap">
                Play Now
              </Button>
            )}{" "}
            {href && (
              <Link href={`${href}`}>
                <span className="text-foreground font-semibold text-md text-nowrap">
                  Read More
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="right rounded-lg h-full w-full max-h-35 max-w-35">
          <Image
            src={imageUrl}
            alt={title}
            height={140}
            width={140}
            placeholder="blur"
            blurDataURL="/default.webp"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default GameDetailsCard;
