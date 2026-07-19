"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampers } from "@/services/campers";
import { PAGE_SIZE } from "@/constants/filters";
import type { CamperFilters } from "@/types/filters";

// пагінація каталогу через useInfiniteQuery: тягне сторінки по PAGE_SIZE штук з урахуванням фільтрів
export function useCampersInfinite(filters: CamperFilters) {
  const query = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) =>
      getCampers({ ...filters, page: pageParam, perPage: PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = query.data?.pages.flatMap((page) => page.campers) ?? [];

  return { ...query, campers };
}
