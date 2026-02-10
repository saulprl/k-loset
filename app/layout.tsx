import { TopMarqueeBanner } from "@/components/banner/top-marquee-banner/top-marquee-banner";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CartProvider } from "components/cart/cart-context";
import { GeistSans } from "geist/font/sans";
import { DEFAULT_NAVBAR_MENU } from "lib/constants";
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
  const shopifyMenu = await getMenu("navbar-menu");

  // Combine Shopify menu with missing default items
  const existingTitles = shopifyMenu.map((item) => item.title.toLowerCase());
  const missingItems = DEFAULT_NAVBAR_MENU.filter(
    (item) => !existingTitles.includes(item.title.toLowerCase()),
  );

  const menu = [...shopifyMenu, ...missingItems];

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jost.variable} ${libreCaslon.variable} antialiased`}
    >
      <body className="bg-white text-black selection:bg-neutral-50">
        <CartProvider cartPromise={cart}>
          <SidebarProvider defaultOpen={false}>
            <TopMarqueeBanner />
            <Navbar menu={menu} />
            <main className="mx-auto min-h-svh w-full max-w-[96rem] bg-white">
              {children}
              <Toaster closeButton />
            </main>
            <Footer />
          </SidebarProvider>
        </CartProvider>
      </body>
    </html>
  );
}
