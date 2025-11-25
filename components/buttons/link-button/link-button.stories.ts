import { Meta, StoryObj } from "@storybook/nextjs";
import { LinkButton } from "./link-button";

const meta = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
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
  },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Now 50% off",
    trailingIcon: true,
  },
};
