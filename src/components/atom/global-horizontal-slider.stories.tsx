import type { Meta, StoryObj } from "@storybook/react";
import GlobalHorizontalSlider, { GameData } from "../global-components/carousel/global-horizontal-slider";

const meta: Meta<typeof GlobalHorizontalSlider> = {
  title: "Components/GlobalHorizontalSlider",
  component: GlobalHorizontalSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GlobalHorizontalSlider>;

const sampleItems: GameData[] = [
  {
    id: 1,
    src: "/TrendingGames/game01.avif",
    alt: "Soccer",
    players: 22,
  },
  {
    id: 2,
    src: "/TrendingGames/game01.avif",
    alt: "Tennis",
    players: 2,
  },
  {
    id: 3,
    src: "/TrendingGames/game01.avif",
    alt: "Baseball",
    players: 18,
  },
  {
    id: 4,
    src: "/TrendingGames/game01.avif",
    alt: "Cricket",
    players: 22,
  },
  {
    id: 5,
    src: "/TrendingGames/game01.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 6,
    src: "/TrendingGames/game01.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 7,
    src: "/TrendingGames/game01.avif",
    alt: "Basketball",
    players: 10,
  },
  {
    id: 8,
    src: "/TrendingGames/game01.avif",
    alt: "Basketball",
    players: 10,
  },
];

export const Default: Story = {
  args: {
    title: "Trending Sports",
    items: sampleItems,
  },
};

export const WithFewerItems: Story = {
  args: {
    title: "Featured Games",
    items: sampleItems.slice(0, 2),
  },
};