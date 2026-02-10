import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind K-YOBOK. Learn about our mission, values, and the passionate team dedicated to crafting personalized fashion.",
};

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
