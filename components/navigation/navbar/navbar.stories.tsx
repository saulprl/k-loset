import { SidebarProvider } from "@/components/ui/sidebar";
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
  args: {
    menu: [
      {
        title: "Tops",
        path: "/winter-uniforms/tops",
        children: [
          {
            title: "Sweater",
            path: "/winter-uniforms/sweaters+winter",
          },
          {
            title: "Coats",
            path: "/winter-uniforms/coats+winter",
          },
          {
            title: "Cardigans",
            path: "/winter-uniforms/cardigans+winter",
          },
          {
            title: "Henleys",
            path: "/winter-uniforms/henleys",
          },
          {
            title: "Blazers",
            path: "/winter-uniforms",
          },
          {
            title: "Polo Shirts",
            path: "/winter-uniforms",
          },
          {
            title: "Sweatshirts",
            path: "/winter-uniforms",
          },
          {
            title: "Vests",
            path: "/winter-uniforms",
          },
          {
            title: "Bardot tops",
            path: "/winter-uniforms",
          },
        ],
      },
      {
        title: "Bottoms",
        path: "/winter-uniforms",
        children: [],
      },
    ],
  },
  render: (args) => (
    <SidebarProvider>
      <Navbar {...args} />
    </SidebarProvider>
  ),
};
