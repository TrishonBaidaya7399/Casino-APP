import type { Meta, StoryObj } from "@storybook/react";
import { GlobalTable } from "../global-components/global-table/global-table";

type User = {
  id: number;
  name: string;
  role: string;
};

const meta: Meta<typeof GlobalTable<User>> = {
  title: "Components/Global Table",
  component: GlobalTable<User>,
  tags: ["autodocs"],
  args: {
    columns: [
     { key: "id", label: "ID", align: "left" },
      { key: "name", label: "Name", align: "left" },
      { key: "role", label: "Role", align: "left" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof GlobalTable<User>>;

const sampleData: User[] = [
  { id: 1, name: "Alice", role: "Admin"  },
  { id: 2, name: "Bob", role: "Editor"  },
  { id: 3, name: "Charlie", role: "Viewer"  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    loading: false,
    emptyMessage: "No users found.",
  },
};
