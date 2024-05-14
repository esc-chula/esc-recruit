"use client";

import BottomRightLogo from "@/components/bottom-right-logo";
import { useTest } from "@/contexts/test-context";
import Departments from "@/data/departments.json";
import Years from "@/data/years.json";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default function ResultPage({ params }: { params: { year: string } }) {
  const router = useRouter();
  const { summarizeAnswers } = useTest();

  const year = Years.find((year) => year.id.toString() === params.year);
  if (!year) {
    return notFound();
  }

  const result = summarizeAnswers();
  if (!result || result.length === 0) {
    router.push("/");
    return null;
  }

  const departmentId = result[0][0];
  const department = Departments.find((dep) => dep.id === departmentId);
  if (!department) {
    router.push("/");
    return null;
  }

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
        <Image
          src={`/${department.id}.png`}
          width={96}
          height={96}
          alt={department.name}
          className="select-none"
        />
        <div className="space-y-1 text-center">
          <p className="text-lg">คุณเหมาะกับฝ่าย</p>
          <h1 className="text-4xl font-bold">{department.name}!</h1>
        </div>
        <div className="text-center">
          <p className="text-xs">และรองลงมาเป็นฝ่าย</p>
          <p className="text-sm">
            {result
              .map((dep) => {
                const department = Departments.find((d) => d.id === dep[0]);
                return department ? department.name : "";
              })
              .slice(1, 4)
              .join(", ")}
          </p>
        </div>
        <div className="grid space-y-4 pt-10 text-center">
          <Link
            href={year.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-identity-cloud px-4 py-2 text-xl font-semibold text-identity-esc"
          >
            สมัครเลย!
          </Link>
          <Link
            href={`/${year.id}/test/1`}
            className="rounded-xl border-2 border-identity-cloud px-4 py-2 text-sm font-medium"
          >
            ทำแบบทดสอบอีกครั้ง
          </Link>
        </div>
      </div>
      <BottomRightLogo />
    </>
  );
}