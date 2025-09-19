import Image from "next/image";
import React from "react";

function SportsPage() {
  return (
    <div className="app-container">
      <div className="py-6 flex flex-col gap-6">
        <div className="h-130 w-full rounded-lg bg-sidebar">
          <Image
            height={522}
            width={1200}
            src="/sports/sports-banner-01.webp"
            alt="sports name"
            priority
            placeholder="blur"
            blurDataURL="/default.webp"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="h-130 w-full rounded-lg bg-sidebar">
          <Image
            height={522}
            width={1200}
            src="/sports/sports-banner-02.webp"
            alt="sports name"
            priority
            placeholder="blur"
            blurDataURL="/default.webp"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SportsPage;
