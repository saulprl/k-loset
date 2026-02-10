import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pre-Orders",
  description:
    "Reserve exclusive fashion pieces before they launch. Get priority access, guaranteed stock, and special pricing on upcoming releases.",
};

export default function PreOrdersLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
