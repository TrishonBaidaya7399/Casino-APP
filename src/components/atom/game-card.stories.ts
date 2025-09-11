import type { Meta, StoryObj } from "@storybook/react";
import GameCard from "../global-components/cards/game-card";

const meta: Meta<typeof GameCard> = {
  title: "Components/GameCard",
  component: GameCard,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source for the game card",
    },
    alt: {
      control: "text",
      description: "Alt text for the image",
    },
    width: {
      control: "number",
      description: "Image width (passed to Next.js Image)",
    },
    height: {
      control: "number",
      description: "Image height (passed to Next.js Image)",
    },
    id: {
      control: "number",
      description: "Unique identifier badge displayed on card",
    },
    players: {
      control: "number",
      description: "Number of players to show player status",
    },
  },
};

export default meta;
type Story = StoryObj<typeof GameCard>;

// Default card
export const Default: Story = {
  args: {
    src: "/TrendingGames/game01.avif",
    alt: "Default Game",
    width: 143,
    height: 188,
    id: 1,
    players: 0,
  },
};

// With players
export const WithPlayers: Story = {
  args: {
    src: "/TrendingGames/game02.avif",
    alt: "Game with players",
    width: 143,
    height: 188,
    id: 2,
    players: 6,
  },
};

// Without ID
export const WithoutId: Story = {
  args: {
    src: "/TrendingGames/game03.avif",
    alt: "Game without ID badge",
    width: 143,
    height: 188,
    players: 3,
  },
};

// Larger size preview
export const Large: Story = {
  args: {
    src: "/TrendingGames/game04.avif",
    alt: "Large Game Card",
    width: 200,
    height: 260,
    id: 5,
    players: 8,
  },
};
