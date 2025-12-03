import { Logo } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between gap-8 bg-neutral-50 px-4 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2 sm:gap-6">
            <NavigationMenuItem asChild>
              <Button variant="ghost" size="icon-sm">
                <Search />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
              <Button variant="ghost" size="icon-sm">
                <ShoppingBag />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
              <Button variant="ghost" size="icon-sm">
                <UserRound />
              </Button>
            </NavigationMenuItem>
            <SidebarProvider>
              <NavigationMenuItem asChild className="md:hidden">
                <SidebarTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <Menu />
                  </Button>
                </SidebarTrigger>
              </NavigationMenuItem>
              <Sidebar side="right" variant="inset">
                <SidebarContent>
                  <SidebarInset>
                    <NavigationMenu className="w-full bg-red-500">
                      <NavigationMenuList className="flex w-full flex-col">
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Tops</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-full grid-cols-2 gap-2">
                              <li>Sweaters</li>
                              <li>Coats</li>
                              <li>Henleys</li>
                              <li>Cardigans</li>
                              <li>Blazers</li>
                              <li>Polo Shirts</li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>Bottoms</NavigationMenuItem>
                        <NavigationMenuItem>All</NavigationMenuItem>
                        <NavigationMenuItem>
                          Personalized Clothing
                        </NavigationMenuItem>
                        <NavigationMenuItem>Pre-Orders</NavigationMenuItem>
                        <NavigationMenuItem>About Us</NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </SidebarInset>
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
