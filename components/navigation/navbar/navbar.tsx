import { Logo } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
import { ChevronDown, Search, ShoppingBag, UserRound } from "lucide-react";
import Link from "next/link";

interface Props {
  menu: Menu[];
}

export const Navbar = ({ menu }: Props) => {
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
            <NavigationMenuItem asChild className="md:hidden">
              <SidebarTrigger />
            </NavigationMenuItem>
            <Sidebar side="right" collapsible="offcanvas">
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
                          key={item.title}
                        >
                          <SidebarGroup>
                            <SidebarGroupLabel
                              className="text-2xl font-medium"
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
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          className="text-2xl font-medium"
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
    </header>
  );
};
