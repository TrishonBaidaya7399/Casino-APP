import Image from "next/image";
import Link from "next/link";
import React from "react";

function GameDetailsCard({
  type,
  title,
  subTitle,
  href,
  imageUrl,
}: {
  type?: string;
  title: string;
  subTitle: string;
  href?: string;
  imageUrl: string;
}) {
  return (
    <div>
      <div className="w-full h-full max-w-98 max-h-47 rounded-lg bg-sidebar p-6 flex flex-row gap-5 justify-between items-center">
        <div className="left flex flex-col justify-between h-full min-h-35">
          <div className="flex flex-col gap-3">
            {type && (
              <div className="capitalize badge px-2 py-1 rounded-full bg-muted-foreground text-xs w-fit font-normal text-foreground">
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
          {href && (
            <Link href={`${href}`}>
              <span className="text-foreground font-semibold text-md">
                Read More
              </span>
            </Link>
          )}
        </div>
        <div className="right rounded-lg h-full w-full max-h-35 max-w-35">
          <Image
            src={imageUrl}
            alt={title}
            height={140}
            width={140}
            loading="lazy"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default GameDetailsCard;
