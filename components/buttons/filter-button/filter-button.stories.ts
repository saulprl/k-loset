import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { FilterButton } from "./filter-button";

const meta = {
  title: "Components/Buttons/FilterButton",
  component: FilterButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "The button's label." },
    size: {
      control: "select",
      options: ["filter-sm", "filter-lg"],
      description: "The size of the filter button.",
    },
    variant: {
      control: "select",
      options: ["filter"],
      description: "The variant style of the button.",
    },
    active: {
      control: "boolean",
      description: "Whether the filter button is active or not.",
    },
  },
  args: {
    onClick: fn(),
    active: false,
  },
} satisfies Meta<typeof FilterButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "filter-sm",
    children: "XS",
    variant: "filter",
  },
};

export const Large: Story = {
  args: {
    size: "filter-lg",
    children: "Cotton",
    variant: "filter",
  },
};
