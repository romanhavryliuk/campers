"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CamperFilters } from "@/types/filters";

const FILTER_KEYS: (keyof CamperFilters)[] = [
  "location",
  "form",
  "transmission",
  "engine",
];

// зберігає активні фільтри каталогу прямо в query-параметрах адресного рядка
export function useCamperFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // читає поточні фільтри з URL
  const filters = useMemo<CamperFilters>(() => {
    const result: CamperFilters = {};
    FILTER_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        result[key] = value as never;
      }
    });
    return result;
  }, [searchParams]);

  // записує нові фільтри в URL (порожні значення просто не додаються)
  const setFilters = useCallback(
    (next: CamperFilters) => {
      const params = new URLSearchParams();
      FILTER_KEYS.forEach((key) => {
        const value = next[key];
        if (value) {
          params.set(key, value);
        }
      });
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  return { filters, setFilters };
}
