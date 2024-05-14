"use client";

import { useRouter } from "next/navigation";
import Years from "@/data/years.json";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const activeYears = Years.filter((year) => year.active);

  useEffect(() => {
    if (activeYears.length === 1) {
      router.push(`/${activeYears[0].id}`);
    }
  }, [activeYears, router]);

  return (
    <div className="flex flex-col items-center h-full w-full justify-center">
      <Image
        src="/logo.svg"
        width={64}
        height={64}
        alt={"esc logo"}
        className="select-none animate-pulse duration-0"
      />
    </div>
  );
}
