"use client";

import Years from "@/data/years.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const activeYears = Years.filter((year) => year.active);

  useEffect(() => {
    if (activeYears.length === 1) {
      router.push(`/${activeYears[0].id}`);
    }
  }, [activeYears, router]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        width={64}
        height={64}
        alt={"esc logo"}
        className="animate-pulse select-none duration-0"
      />
    </div>
  );
}
