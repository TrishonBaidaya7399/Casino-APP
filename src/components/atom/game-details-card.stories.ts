import type { Meta, StoryObj } from "@storybook/react";
import GameDetailsCard from "../global-components/cards/game-details-card";

const meta: Meta<typeof GameDetailsCard> = {
  title: "Components/Game Details Card",
  component: GameDetailsCard,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "text",
      description: "Badge type label shown at the top",
    },
    title: {
      control: "text",
      description: "Main title of the card",
    },
    subTitle: {
      control: "text",
      description: "Subtitle or description",
    },
    href: {
      control: "text",
      description: "Optional link for 'Read More'",
    },
    imageUrl: {
      control: "text",
      description: "Image source for the right-side image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof GameDetailsCard>;

// Default
export const Default: Story = {
  args: {
    type: "Casino",
    title: "Blackjack",
    subTitle: "Card Game",
    imageUrl: "/promotions/promotion1.avif",
  },
};

// With Link
export const WithLink: Story = {
  args: {
    type: "Sports",
    title: "Football League",
    subTitle: "Championship",
    href: "/games/football",
    imageUrl: "/promotions/promotion2.avif",
  },
};

// Without Badge
export const WithoutType: Story = {
  args: {
    title: "Roulette",
    subTitle: "Classic Wheel Game",
    imageUrl: "/promotions/promotion3.avif",
  },
};

// Custom Image
export const CustomImage: Story = {
  args: {
    type: "Arcade",
    title: "Street Fighter",
    subTitle: "Action Fighting Game",
    imageUrl: "/promotions/promotion3.avif",
  },
};
