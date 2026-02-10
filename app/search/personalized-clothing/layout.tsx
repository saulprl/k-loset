import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Personalized Clothing",
  description:
    "Customize your clothing with names, numbers, and unique designs. Create personalized fashion that tells your story.",
};

export default function PersonalizedClothingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
