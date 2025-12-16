import { Meta, StoryObj } from "@storybook/nextjs";
import { PromotionalBanner } from "./promotional-banner";

const meta = {
  title: "Components/Banner/PromotionalBanner",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: PromotionalBanner,
  argTypes: {
    variant: {
      control: "select",
      options: ["morado", "azul", "crema", "gris"],
      description: "The variant style of the banner.",
    },
    title: { control: "text", description: "The banner's title." },
    message: { control: "text", description: "The banner's message." },
    linkText: { control: "text", description: "The banner's link text." },
    linkUrl: { control: "text", description: "The banner's link URL." },
  },
} satisfies Meta<typeof PromotionalBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Promotional Banner",
    message: "This is a promotional banner.",
    linkText: "Learn more",
    linkUrl: "#",
    variant: "morado",
  },
};

export const Azul: Story = {
  args: {
    variant: "azul",
    title: "Promotional Banner",
    message: "This is a promotional banner.",
    linkText: "Learn more",
    linkUrl: "#",
  },
};

export const Crema: Story = {
  args: {
    variant: "crema",
    title: "Promotional Banner",
    message: "This is a promotional banner.",
    linkText: "Learn more",
    linkUrl: "#",
  },
};

export const Gris: Story = {
  args: {
    variant: "gris",
    title: "Promotional Banner",
    message: "This is a promotional banner.",
    linkText: "Learn more",
    linkUrl: "#",
  },
};
