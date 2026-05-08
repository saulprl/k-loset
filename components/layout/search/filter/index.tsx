import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SortFilterItem } from "lib/constants";
import { Suspense } from "react";
import FilterItemDropdown from "./dropdown";
import { FilterItem } from "./item";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  const desktopList = (
    <ul className="hidden space-y-0.5 pt-2 md:block">
      <Suspense fallback={null}>
        <FilterItemList list={list} />
      </Suspense>
    </ul>
  );

  return (
    <>
      <nav>
        {title ? (
          <details
            open
            className="group hidden border-t border-neutral-300 pt-2 md:block dark:border-neutral-700"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold tracking-tight text-neutral-900 marker:content-none dark:text-neutral-100">
              {title}
              <ChevronDownIcon className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180 dark:text-neutral-300" />
            </summary>
            {desktopList}
          </details>
        ) : (
          desktopList
        )}
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} title={title} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
