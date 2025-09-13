// stories/GlobalModal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalModal from "../global-components/global-modal/global-modal";

const meta: Meta<typeof GlobalModal> = {
  title: "Components/GlobalModal",
  component: GlobalModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the modal.",
    },
    children: {
      control: false,
      description: "The content of the modal body.",
    },
    open: {
      control: false,
    },
    onOpenChange: {
      control: false,
    },
    className: {
      control: "text",
      description:
        'Custom CSS classes including height, width, max-height, max-width (e.g., "h-[500px] w-[600px] max-h-[80vh] max-w-[90vw]").',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlobalModal>;

const Template = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <GlobalModal open={open} onOpenChange={setOpen} {...args} />
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: "I forgot my password",
    children: (
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground/80 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            defaultValue="mont453@yandex.com"
            className="w-full"
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600">
          Recover Password
        </Button>
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  render: Template,
  args: {
    children: (
      <div className="space-y-4">
        <p className="text-foreground">Custom content without title.</p>
        <Button>Action</Button>
      </div>
    ),
  },
};

export const CustomTitle: Story = {
  render: Template,
  args: {
    title: (
      <span className="text-red-500">
        Custom <strong>Title</strong>
      </span>
    ),
    children: <p className="text-foreground">Body content.</p>,
  },
};

export const CustomSize: Story = {
  render: Template,
  args: {
    title: "Custom Sized Modal",
    className: "h-[500px] w-[600px] max-h-[80vh] max-w-[90vw]",
    children: (
      <div className="space-y-4">
        <p className="text-foreground">This modal has custom dimensions.</p>
        <Button>Action</Button>
      </div>
    ),
  },
};

export const NarrowModal: Story = {
  render: Template,
  args: {
    title: "Narrow Modal",
    className: "w-[300px] max-w-[70vw]",
    children: (
      <div className="space-y-4">
        <p className="text-foreground">A narrower modal.</p>
        <Button>Action</Button>
      </div>
    ),
  },
};

export const TallModal: Story = {
  render: Template,
  args: {
    title: "Tall Modal",
    className: "h-[700px] max-h-[90vh]",
    children: (
      <div className="space-y-4 h-full overflow-auto">
        <p className="text-foreground">
          This is a tall modal with scrollable content.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-foreground">
            Line {i + 1}
          </p>
        ))}
        <Button>Action</Button>
      </div>
    ),
  },
};
