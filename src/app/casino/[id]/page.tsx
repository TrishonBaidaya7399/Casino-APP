import React from "react";
import dynamic from "next/dynamic";
const PlayerComponent = dynamic(
  () => import("@/sections/casino/casino-details/player-component")
);
const PlayerControls = dynamic(
  () => import("@/sections/casino/casino-details/player-controls")
);
const PlayDetails = dynamic(
  () => import("@/sections/casino/casino-details/play-details")
);
const SlotSection = dynamic(
  () => import("@/sections/casino/casino-details/slot-section")
);
const PublisherCardsCarousel = dynamic(
  () => import("@/sections/casino/publisher-cards-carousel")
);
const CasinoBetsTable = dynamic(
  () => import("@/sections/casino/casino-bets-table")
);

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const gameTitle = "Angel vs Sinner Eternal Battle Enhanced RTP";
  const description =
    "Dive into the thrilling Angel vs Sinner Eternal Battle Enhanced RTP by Pragmatic Play on Casino App Turkey. Enjoy top slots and betting!";
  const canonicalUrl = `http://localhost:3000/casino/${id}`;
  const imageUrl = `http://localhost:3000/images/casino/${id}.jpg`;
  const publishedTime = "2023-01-01T00:00:00Z";
  const modifiedTime = "2025-09-16T20:59:00Z"; // 08:59 PM +06

  return {
    title: `${gameTitle} | Casino Details - Casino App Turkey`,
    description,
    canonical: canonicalUrl,
    openGraph: {
      title: `${gameTitle} | Casino Details - Casino App Turkey`,
      description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${gameTitle} Thumbnail`,
        },
      ],
      siteName: "Casino App Turkey",
      type: "article",
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: `${gameTitle} | Casino Details - Casino App Turkey`,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      "casino",
      "slots",
      "pragmatic play",
      "angel vs sinner",
      "rtp",
      "betting",
      "online casino",
      gameTitle,
    ],
    authors: [{ name: "Casino App Turkey Team" }],
    publisher: "Casino App Turkey",
    metadataBase: new URL("http://localhost:3000"),
  };
}

function CasinoDetailsPage({ id }: { id: string }) {
  return (
    <div className="app-container">
      <div className="pt-6" id={id}>
        <PlayerComponent />
        <div className="pt-4">
          <PlayerControls />
        </div>
        <div className="pt-6">
          <PlayDetails />
        </div>
        <div className="pb-2.5">
          <SlotSection />
        </div>
        <div className="py-9">
          <PublisherCardsCarousel />
        </div>
        <div className="pb-9">
          <CasinoBetsTable gameDetails />
        </div>
      </div>
    </div>
  );
}

export default CasinoDetailsPage;
