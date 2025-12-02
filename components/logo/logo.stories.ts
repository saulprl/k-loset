import { Meta, StoryObj } from "@storybook/nextjs";
import { Logo } from "./logo";

const meta = {
  title: "Components/Logo/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
