"use client";

import { useCamperFilters } from "@/hooks/useCamperFilters";
import { useCampersInfinite } from "@/hooks/useCampersInfinite";
import Loader from "@/components/Loader/Loader";
import CatalogFilters from "@/components/CatalogFilters/CatalogFilters";
import CamperList from "@/components/CamperList/CamperList";
import styles from "./CatalogPage.module.css";

// сторінка каталогу: фільтри зліва + список кемперів з довантаженням справа
export default function CatalogPage() {
  const { filters, setFilters } = useCamperFilters();
  const {
    campers,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampersInfinite(filters);

  return (
    <section className={styles.catalog}>
      <aside className={styles.sidebar}>
        <CatalogFilters value={filters} onChange={setFilters} />
      </aside>
      <div className={styles.content}>
        {isLoading && <Loader />}
        {isError && <p>Failed to load campers. Please try again.</p>}
        {!isLoading && !isError && (
          <CamperList
            campers={campers}
            onClearFilters={() => setFilters({})}
          />
        )}
        {hasNextPage && (
          // довантажує наступну сторінку кемперів з урахуванням активних фільтрів
          <button
            className={`btn btn-outline ${styles.loadMore}`}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
}
