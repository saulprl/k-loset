import { Logo } from "@/components/logo/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between gap-8 bg-neutral-50 px-4 py-4">
      <Link href="/">
        <Logo />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Search />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ShoppingBag />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <UserRound />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Menu />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
