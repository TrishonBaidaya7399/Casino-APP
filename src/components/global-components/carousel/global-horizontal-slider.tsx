"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GameCard from "../cards/game-card";

export interface GameData {
  src: string;
  alt: string;
  id: number;
  players?: number;
}

interface GlobalHorizontalSliderProps {
  title: string;
  items: GameData[];
}

export default function GlobalHorizontalSlider({
  title,
  items,
}: GlobalHorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(392);

  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current && scrollRef.current.firstElementChild) {
        const firstChild = scrollRef.current.firstElementChild as HTMLElement;
        setCardWidth(firstChild.clientWidth || 143);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const gap = 16;
      const scrollAmount = cardWidth + gap;
      const newScroll =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <div className="w-full app-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-foreground text-2xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className={`
              size-6 p-0.5 rounded-sm border
              ${
                canScrollLeft
                  ? "border-foreground text-foreground bg-foreground/10 hover:bg-foreground/20"
                  : "border-foreground-muted text-foreground-muted bg-transparent"
              }
              flex items-center justify-center
            `}
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          >
            <ChevronLeft
              className={`size-6 p-0.5 ${
                canScrollLeft ? "text-foreground" : "text-muted-foreground"
              }`}
            />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="outline"
            className={`
              size-6 p-0.5 rounded-sm border
              ${
                canScrollRight
                  ? "border-foreground text-foreground bg-foreground/10 hover:bg-foreground/20"
                  : "border-foreground-muted text-foreground-muted bg-transparent"
              }
              flex items-center justify-center
            `}
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          >
            <ChevronRight
              className={`size-6 p-0.5 ${
                canScrollRight ? "text-foreground" : "text-muted-foreground"
              }`}
            />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide w-full h-60"
        onScroll={checkScroll}
      >
        {items.map((item) => (
          <GameCard
            key={item.id}
            src={item.src}
            alt={item.alt}
            id={item.id}
            players={item.players}
            width={143}
            height={188}
          />
        ))}
      </div>
    </div>
  );
}
