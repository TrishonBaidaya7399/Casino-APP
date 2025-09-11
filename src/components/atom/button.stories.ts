import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/button";
// import { FaUser, FaGamepad } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "gray",
        "outline",
        "orangeGradient",
        "purpleGradient",
        "greenGradient",
      ],
    },
    fullWidth: { control: "boolean" },
    asChild: { control: "boolean" },
    children: { control: "text" },
    icon: { control: false }, // not exposed in controls, handled via JSX
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ⚪ Gray button
export const Gray: Story = {
  args: {
    children: "Casino",
    variant: "gray",
  },
};

// ⬜ Outline button
export const Outline: Story = {
  args: {
    children: "Login",
    variant: "outline",
  },
};

// 🟠 Orange gradient
export const OrangeGradient: Story = {
  args: {
    children: "Register",
    variant: "orangeGradient",
},
};

// icon: <FaUser />,
// icon: <FaGamepad />,

// 🟣 Purple gradient
export const PurpleGradient: Story = {
  args: {
    children: "Casino",
    variant: "purpleGradient",
  },
};

// 🟢 Green gradient
export const GreenGradient: Story = {
  args: {
    children: "Sports",
    variant: "greenGradient",
  },
};

// 📏 Full width example
export const FullWidth: Story = {
  args: {
    children: "Full Width",
    variant: "orangeGradient",
    fullWidth: true,
  },
};
