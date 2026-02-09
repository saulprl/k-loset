import { Meta, StoryObj } from "@storybook/nextjs";
import { TopMarqueeBanner } from "./top-marquee-banner";

const meta = {
  title: "Components/Banner/TopMarqueeBanner",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  component: TopMarqueeBanner,
  argTypes: {
    speed: {
      control: "select",
      options: ["slow", "normal", "fast"],
      description: "The speed of the marquee animation.",
    },
    items: {
      control: "object",
      description: "Array of promotional items to display.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes.",
    },
  },
} satisfies Meta<typeof TopMarqueeBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Slow: Story = {
  args: {
    speed: "slow",
  },
};

export const Fast: Story = {
  args: {
    speed: "fast",
  },
};

export const CustomItems: Story = {
  args: {
    items: [
      { text: "Free returns on all orders" },
      { text: "New arrivals every week" },
      { text: "Members get exclusive discounts" },
    ],
  },
};
