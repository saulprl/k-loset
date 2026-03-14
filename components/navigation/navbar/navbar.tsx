"use client";

import CartModal from "@/components/cart/modal";
import { Logo } from "@/components/logo/logo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Menu } from "@/lib/shopify/types";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  menu: Menu[];
}

export const Navbar = ({ menu }: Props) => {
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const pathMatches = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const activePath = menu
    .flatMap((item) => [
      item.path,
      ...item.children.map((subItem) => subItem.path),
    ])
    .filter((path) => pathMatches(path))
    .sort((a, b) => b.length - a.length)[0];

  const dropdownContent =
    menuIndex !== null
      ? menu[menuIndex]?.children.map((subItem) => (
          <NavigationMenuItem key={`navbar-subitem-${subItem.title}`}>
            <NavigationMenuLink asChild>
              <Link href={subItem.path} className="text-2xl">
                {subItem.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))
      : null;

  return (
    <header
      className="relative flex h-fit w-full items-start"
      onMouseLeave={() => setMenuIndex(null)}
    >
      <div className="border-neutral-10 flex w-full items-center justify-between gap-8 border-b bg-white px-4 py-4 md:h-12 md:px-16 md:py-8 lg:py-10">
        <Link href="/">
          <Logo />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex w-full items-center justify-center gap-2 max-lg:hidden lg:gap-8">
            {menu.map((item, index) => {
              const isItemActive =
                activePath === item.path ||
                item.children.some((subItem) => activePath === subItem.path);

              if (item.children.length > 0) {
                return (
                  <NavigationMenuItem key={`navbar-item-${item.title}`}>
                    <NavigationMenuTrigger
                      onMouseEnter={() => setMenuIndex(index)}
                      className={clsx(
                        "h-auto rounded-none bg-transparent px-0 py-0 text-2xl transition-[color,transform] duration-200 hover:scale-105 hover:bg-transparent focus:bg-transparent focus-visible:ring-0 data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent lg:text-xl",
                        {
                          "font-bold text-stone-900 data-[state=open]:text-stone-900":
                            isItemActive,
                          "font-medium text-neutral-700 hover:text-stone-800 data-[state=open]:text-stone-800":
                            !isItemActive,
                        },
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={`navbar-item-${item.title}`}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.path}
                      className={clsx(
                        "rounded-none p-0 text-2xl transition-[color,transform] duration-200 hover:scale-105 hover:bg-transparent focus:bg-transparent focus-visible:ring-0 lg:text-xl",
                        {
                          "font-bold text-stone-900": isItemActive,
                          "font-medium text-neutral-700 hover:text-stone-800":
                            !isItemActive,
                        },
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="gap-2 sm:gap-6 md:gap-2">
            {/* <NavigationMenuItem asChild>
              <Button variant="ghost" size="icon-sm">
                <Search />
              </Button>
            </NavigationMenuItem> */}
            <NavigationMenuItem asChild>
              <CartModal />
            </NavigationMenuItem>
            {/* <NavigationMenuItem asChild>
              <Button variant="ghost" size="icon-sm">
                <UserRound />
              </Button>
            </NavigationMenuItem> */}
            <NavigationMenuItem asChild className="lg:hidden">
              <SidebarTrigger />
            </NavigationMenuItem>
            <Sidebar side="right" className="lg:hidden" collapsible="offcanvas">
              <SidebarHeader>
                <Logo as="span" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {menu.map((item) => {
                    if (item.children.length > 0) {
                      return (
                        <Collapsible
                          className={`group/${item.title.toLowerCase()}`}
                          key={`sidebar-item-${item.title}`}
                        >
                          <SidebarGroup>
                            <SidebarGroupLabel
                              className="text-2xl font-medium text-neutral-100"
                              asChild
                            >
                              <CollapsibleTrigger>
                                {item.title}{" "}
                                <ChevronDown
                                  className={`ml-auto transition-transform group-data-[state=open]/${item.title.toLowerCase()}:rotate-180`}
                                />
                              </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                              {item.children.map((subItem) => (
                                <SidebarMenuItem key={subItem.title}>
                                  <SidebarMenuButton
                                    className="text-xl font-light"
                                    asChild
                                  >
                                    <Link href={subItem.path}>
                                      {subItem.title}
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              ))}
                            </CollapsibleContent>
                          </SidebarGroup>
                        </Collapsible>
                      );
                    }

                    return (
                      <SidebarMenuItem
                        key={`sidebar-item-${item.title}`}
                        className="px-2"
                      >
                        <SidebarMenuButton
                          className="text-2xl font-medium text-neutral-100"
                          asChild
                        >
                          <Link href={item.path}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {dropdownContent && (
        <NavigationMenu className="max-w-auto absolute top-full right-0 left-0 z-50 w-full bg-white py-8">
          <NavigationMenuList className="grid w-full grid-cols-3">
            {dropdownContent}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};
