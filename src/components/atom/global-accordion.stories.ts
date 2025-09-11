import type { Meta, StoryObj } from "@storybook/react";
import { GlobalAccordion } from "../global-components/global-accordion";

type SliderData = {
  title: string;
  content: string;
};

const meta: Meta<typeof GlobalAccordion> = {
  title: "Components/Global Accordion",
  component: GlobalAccordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GlobalAccordion>;

const sampleData: SliderData[] = [
  {
    title: "Who is Brand Name",
    content:
      "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages...",
  },
  {
    title: "Is Brand Name Licensed?",
    content: "Yes, Stake.com is a licensed platform...",
  },
  {
    title: "Is Betting on Brand Name Safe?",
    content: "Yes, betting on Stake.com is safe...",
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};
