"use client";

import CartModal from "@/components/cart/modal";
import { Logo } from "@/components/logo/logo";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "@/lib/shopify/types";
import clsx from "clsx";
import { Heart, House, Search, Tag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useMemo, useState } from "react";

interface Props {
  menu: Menu[];
}

export const Navbar = ({ menu }: Props) => {
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);
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

  useEffect(() => {
    setIsCategorySheetOpen(false);
  }, [pathname]);

  const firstPathByTitle = useMemo(() => {
    return (terms: string[], fallback: string) => {
      const normalizedTerms = terms.map((term) => term.toLowerCase());
      const item = menu.find((menuItem) => {
        const title = menuItem.title.toLowerCase();
        return normalizedTerms.some((term) => title.includes(term));
      });

      return item?.path ?? fallback;
    };
  }, [menu]);

  const brandsPath = firstPathByTitle(
    ["brand", "brands", "marca", "marcas"],
    "/search",
  );
  const wishlistPath = firstPathByTitle(
    ["wishlist", "wish", "favorite", "favoritos"],
    "/search/personalized-clothing",
  );
  const profilePath = firstPathByTitle(
    ["account", "my", "profile", "about"],
    "/about-us",
  );

  const isHomeActive = pathname === "/";
  const isBrandsActive =
    pathname === brandsPath || pathname.startsWith(`${brandsPath}/`);
  const isWishlistActive =
    pathname === wishlistPath || pathname.startsWith(`${wishlistPath}/`);
  const isProfileActive =
    pathname === profilePath || pathname.startsWith(`${profilePath}/`);

  const mobileTabClasses = (isActive: boolean) =>
    clsx(
      "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] font-medium leading-none transition-colors",
      {
        "text-neutral-900": isActive,
        "text-neutral-400": !isActive,
      },
    );

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
          <NavigationMenuList className="flex w-full items-center justify-center gap-2 max-lg:hidden lg:gap-4">
            {menu.map((item, index) => {
              const isItemActive =
                activePath === item.path ||
                item.children.some((subItem) => activePath === subItem.path);

              const separator =
                index < menu.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mx-2 h-5 w-px bg-neutral-300/70 lg:mx-3"
                  />
                ) : null;

              if (item.children.length > 0) {
                return (
                  <Fragment key={`navbar-item-${item.title}`}>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        onMouseEnter={() => setMenuIndex(index)}
                        className={clsx(
                          "h-auto rounded-none bg-transparent px-0 py-0 text-2xl transition-[color,transform] duration-200 hover:scale-105 hover:bg-transparent focus:bg-transparent focus-visible:ring-0 data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent lg:text-sm",
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
                    {separator}
                  </Fragment>
                );
              }

              return (
                <Fragment key={`navbar-item-${item.title}`}>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.path}
                        className={clsx(
                          "rounded-none p-0 text-2xl transition-[color,transform] duration-200 hover:scale-105 hover:bg-transparent focus:bg-transparent focus-visible:ring-0 lg:text-sm",
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
                  {separator}
                </Fragment>
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 lg:hidden">
        <ul className="mx-auto grid h-16 w-full max-w-[96rem] grid-cols-5">
          <li>
            <Link href="/" className={mobileTabClasses(isHomeActive)}>
              <House className="size-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setIsCategorySheetOpen(true)}
              className={mobileTabClasses(isCategorySheetOpen)}
              aria-label="Open categories"
            >
              <Search className="size-5" />
              <span>Category</span>
            </button>
          </li>
          <li>
            <Link
              href={brandsPath}
              className={mobileTabClasses(isBrandsActive)}
            >
              <Tag className="size-5" />
              <span>Brands</span>
            </Link>
          </li>
          <li>
            <Link
              href={wishlistPath}
              className={mobileTabClasses(isWishlistActive)}
            >
              <Heart className="size-5" />
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link
              href={profilePath}
              className={mobileTabClasses(isProfileActive)}
            >
              <User className="size-5" />
              <span>My</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Sheet open={isCategorySheetOpen} onOpenChange={setIsCategorySheetOpen}>
        <SheetContent
          side="right"
          className="forced-light-mobile-menu w-[88vw] p-0 sm:max-w-sm lg:hidden"
        >
          <SheetHeader className="border-b border-neutral-200/80 px-5 pt-6 pb-3 text-left">
            <SheetTitle>
              <Logo as="span" />
            </SheetTitle>
          </SheetHeader>
          <div className="px-4 py-3">
            <ul className="divide-y divide-neutral-200">
              {menu.map((item) => {
                const isItemActive =
                  activePath === item.path ||
                  item.children.some((subItem) => activePath === subItem.path);

                return (
                  <li
                    key={`mobile-sheet-item-${item.title}`}
                    className="py-1.5"
                  >
                    <Link
                      href={item.path}
                      className={clsx(
                        "block rounded-md px-3 py-2.5 text-xl font-semibold tracking-tight text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                        {
                          "bg-neutral-100 text-neutral-900": isItemActive,
                        },
                      )}
                    >
                      {item.title}
                    </Link>
                    {item.children.length > 0 ? (
                      <ul className="mt-1 ml-3 border-l border-neutral-200 pl-2">
                        {item.children.map((subItem) => (
                          <li key={`mobile-sheet-subitem-${subItem.title}`}>
                            <Link
                              href={subItem.path}
                              className={clsx(
                                "block rounded-md px-3 py-2 text-base tracking-tight text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                                {
                                  "font-semibold text-neutral-900":
                                    activePath === subItem.path,
                                },
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetContent>
      </Sheet>

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
