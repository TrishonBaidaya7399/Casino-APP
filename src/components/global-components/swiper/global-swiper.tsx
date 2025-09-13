"use client";

import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface GlobalSwiperProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
}

export default function GlobalSwiper<T>({
    title,
    items,
    renderItem,
    breakpoints,
}: GlobalSwiperProps<T>) {
    const swiperId = title.replace(/\s+/g, "-").toLowerCase();

    return (
        <div className="w-full h-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-2.5">
                <h2 className="text-foreground-muted text-base font-semibold">{title}</h2>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className="size-6 p-0.5 rounded-sm flex items-center justify-center"
                        id={`${swiperId}-prev`}
                    >
                        <ChevronLeft className="size-5" />
                    </Button>
                    <Button
                        variant="outline"
                        className="size-6 p-0.5 rounded-sm flex items-center justify-center"
                        id={`${swiperId}-next`}
                    >
                        <ChevronRight className="size-5" />
                    </Button>
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: `#${swiperId}-prev`,
                    nextEl: `#${swiperId}-next`,
                }}
                breakpoints={
                    breakpoints ?? {
                        320: { slidesPerView: 2, spaceBetween: 8 },
                        640: { slidesPerView: 3, spaceBetween: 12 },
                        1024: { slidesPerView: 5, spaceBetween: 16 },
                        1440: { slidesPerView: 6, spaceBetween: 20 },
                    }
                }
                spaceBetween={12}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
