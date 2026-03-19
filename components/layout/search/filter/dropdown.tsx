"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { ListItem } from ".";
import { FilterItem } from "./item";

export default function FilterItemDropdown({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    let nextActive = list[0]?.title ?? "";

    list.forEach((listItem: ListItem) => {
      if (
        ("path" in listItem && pathname === listItem.path) ||
        ("slug" in listItem && searchParams.get("sort") === listItem.slug)
      ) {
        nextActive = listItem.title;
      }
    });

    setActive(nextActive);
  }, [pathname, list, searchParams]);

  return (
    <div className="relative" ref={ref}>
      {title ? (
        <p className="mb-2 pl-1 text-xs font-medium tracking-[0.12em] text-neutral-500 uppercase dark:text-neutral-400">
          {title}
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded-xl border border-neutral-300 bg-white px-4 py-3 text-left text-[18px] font-medium text-neutral-900 shadow-sm transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:border-neutral-500"
        aria-expanded={openSelect}
        aria-label={title ? `Open ${title} options` : "Open filter options"}
      >
        <span>{active || "Select"}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-neutral-500 transition-transform dark:text-neutral-300 ${openSelect ? "rotate-180" : ""}`}
        />
      </button>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 mt-2 w-full rounded-xl border border-neutral-200 bg-white p-3 shadow-xl dark:border-neutral-800 dark:bg-black"
        >
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
