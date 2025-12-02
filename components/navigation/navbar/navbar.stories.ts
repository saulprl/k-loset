import { Meta, StoryObj } from "@storybook/nextjs";
import { Navbar } from "./navbar";

const meta = {
  title: "Components/Navigation/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
