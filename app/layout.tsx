import { Navbar } from "@/components/navigation/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CartProvider } from "components/cart/cart-context";
import { GeistSans } from "geist/font/sans";
import { getCart, getMenu } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { Jost, Libre_Caslon_Display } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const { SITE_NAME } = process.env;

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-jost",
});

const libreCaslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-libre-caslon",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();
  const menu = await getMenu("navbar-menu");

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jost.variable} ${libreCaslon.variable} antialiased`}
    >
      <body className="bg-white text-black selection:bg-neutral-50">
        <CartProvider cartPromise={cart}>
          <SidebarProvider defaultOpen={false}>
            <Navbar menu={menu} />
            <main className="container mx-auto min-h-svh bg-white">
              {children}
              <Toaster closeButton />
            </main>
          </SidebarProvider>
        </CartProvider>
      </body>
    </html>
  );
}
