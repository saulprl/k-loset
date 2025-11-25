import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { TextButton } from "./text-button";

const meta = {
  title: "Components/Buttons/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Now 50% off",
    trailingIcon: true,
    size: "default",
  },
};
