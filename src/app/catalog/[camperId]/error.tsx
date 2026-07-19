"use client";

import { useEffect } from "react";

export default function CamperDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong while loading this camper.</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
