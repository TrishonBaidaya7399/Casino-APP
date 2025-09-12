import type { Meta, StoryObj } from "@storybook/react";
import GlobalCarousel from "../global-components/carousel/global-carousel";
import GameCard from "../global-components/cards/game-card";
import Image from "next/image";

const meta: Meta<typeof GlobalCarousel> = {
  title: "Components/Global Carousel",
  component: GlobalCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the carousel section.",
    },
    items: {
      control: false,
      description: "Array of items to render in the carousel.",
    },
    renderItem: {
      control: false,
      description: "Function to render each item as a React node.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalCarousel>;

// Sample data for stories
const sampleGameData = [
  {
    id: 1,
    src: "/TrendingGames/game01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 2,
    src: "/TrendingGames/game02.avif",
    alt: "Tennis",
    players: 2,
  },
  {
    id: 3,
    src: "/TrendingGames/game03.avif",
    alt: "Baseball",
    players: 18,
  },
  {
    id: 4,
    src: "/TrendingGames/game04.avif",
    alt: "Cricket",
    players: 22,
  },
  {
    id: 5,
    src: "/TrendingGames/game05.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 6,
    src: "/TrendingGames/game06.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 7,
    src: "/TrendingGames/game07.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 8,
    src: "/TrendingGames/game08.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 9,
    src: "/TrendingGames/game01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 10,
    src: "/TrendingGames/game02.avif",
    alt: "Tennis",
    players: 2,
  },
  {
    id: 11,
    src: "/TrendingGames/game03.avif",
    alt: "Baseball",
    players: 18,
  },
  {
    id: 12,
    src: "/TrendingGames/game04.avif",
    alt: "Cricket",
    players: 22,
  },
];

// Render function for GameCard
const renderGameCard = (item: any) => (
  <GameCard
    src={item.src}
    alt={item.alt}
    id={item.id}
    players={item.players}
    width={143}
    height={188}
  />
);

// Sample data for a different card type (e.g., PromotionCard mock)
const samplePromotionData = [
  {
    id: 1,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
  },
  {
    id: 2,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
  },
  {
    id: 3,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
  },
  {
    id: 4,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
  },
  {
    id: 5,
    src: "/TrendingSports/sports05.avif",
    alt: "Basketball",
  },
  {
    id: 6,
    src: "/TrendingSports/sports06.avif",
    alt: "Basketball",
  },
  {
    id: 7,
    src: "/TrendingSports/sports07.avif",
    alt: "Basketball",
  },
  {
    id: 8,
    src: "/TrendingSports/sports08.avif",
    alt: "Basketball",
  },
  {
    id: 9,
    src: "/TrendingSports/sports01.avif",
    alt: "Soccer",
  },
  {
    id: 10,
    src: "/TrendingSports/sports02.avif",
    alt: "Tennis",
  },
  {
    id: 11,
    src: "/TrendingSports/sports03.avif",
    alt: "Baseball",
  },
  {
    id: 12,
    src: "/TrendingSports/sports04.avif",
    alt: "Cricket",
  },
];

// Mock render function for PromotionCard
const renderPromotionCard = (item: any) => (
  <div className="w-[143px] h-[188px] bg-card rounded-lg p-2 flex flex-col justify-between shadow-md">
    <Image
      src={item.image}
      alt={item.title}
      className="w-full h-3/4 object-cover rounded"
    />
    <div className="text-xs font-medium text-card-foreground mt-1 truncate">
      {item.title}
    </div>
    <div className="text-xs text-muted-foreground truncate">
      {item.description}
    </div>
  </div>
);

export const Default: Story = {
  args: {
    title: "Trending Sports",
    items: sampleGameData,
    renderItem: renderGameCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
};

export const WithFewerItems: Story = {
  args: {
    title: "Featured Games",
    items: sampleGameData.slice(0, 3),
    renderItem: renderGameCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
};

export const NoItems: Story = {
  args: {
    title: "No Items Available",
    items: [],
    renderItem: renderGameCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
};

export const LongTitle: Story = {
  args: {
    title: "Top Trending Sports and Games This Week - Exciting Action Awaits!",
    items: sampleGameData,
    renderItem: renderGameCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
};

export const DifferentCardType: Story = {
  args: {
    title: "Promotions",
    items: samplePromotionData,
    renderItem: renderPromotionCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Example using a different card type (e.g., PromotionCard) via renderItem.",
      },
    },
  },
};

export const Responsive: Story = {
  args: {
    title: "Responsive Carousel",
    items: sampleGameData,
    renderItem: renderGameCard,
  },
  decorators: [
    (Story) => (
      <div className="app-container">
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1200px", height: "800px" },
        },
      },
    },
  },
};
