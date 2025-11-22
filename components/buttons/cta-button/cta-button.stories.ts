import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { CTAButton } from "./cta-button";

const meta = {
  title: "Components/Buttons/CTAButton",
  component: CTAButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "inverseDefault",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The variant style of the button.",
    },
    trailingIcon: {
      control: "boolean",
      description: "Whether to show the trailing icon (a right arrow).",
    },
    children: { control: "text", description: "The button's label." },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button.",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CTAButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Action button",
    trailingIcon: true,
    dark: false,
  },
};

export const Dark: Story = {
  args: {
    children: "Action button",
    trailingIcon: true,
    dark: true,
  },
};

export const Iconless: Story = {
  args: {
    children: "More about us",
    trailingIcon: false,
    dark: false,
  },
};

export const SmallIconless: Story = {
  args: {
    children: "Send",
    trailingIcon: false,
    dark: false,
    size: "sm",
  },
};
