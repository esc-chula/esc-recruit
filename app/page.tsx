"use client";

import { useRouter } from "next/navigation";
import Years from "@/data/years.json";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const activeYears = Years.filter((year) => year.active);

  useEffect(() => {
    if (activeYears.length === 1) {
      router.push(`/${activeYears[0].id}`);
    }
  }, [activeYears, router]);

  return null;
}
