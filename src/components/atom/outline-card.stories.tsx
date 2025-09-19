import type { Meta, StoryObj } from "@storybook/react";
import OutlineCard from "../global-components/cards/outline-card";
import Image from "next/image";

const meta: Meta<typeof OutlineCard> = {
    title: "Components/Outline Card",
    component: OutlineCard,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "Title displayed in the card header",
        },
        children: {
            control: "text",
            description: "Content inside the card body",
        },
    },
};

export default meta;
type Story = StoryObj<typeof OutlineCard>;

// Default usage
export const Default: Story = {
    args: {
        title: "Email",
        children: "user@example.com",
    },
};

// With longer content
export const WithContent: Story = {
    args: {
        title: "Profile",
        children: (
            <div className="flex gap-2 items-center">
                <Image
                    src="/avatar.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
                <span>Shuvo Roy</span>
            </div>
        ),
    },
};

// Without content
export const Empty: Story = {
    args: {
        title: "Notifications",
        children: "",
    },
};
