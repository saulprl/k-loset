import Collections from "components/layout/search/collections";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 pt-6 md:flex-row">
      <div className="order-first w-full flex-none md:w-52 md:border-r md:border-neutral-200 md:pr-6 dark:md:border-neutral-800">
        <Suspense fallback={null}>
          <Collections />
        </Suspense>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
