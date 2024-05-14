"use client";

import { notFound } from "next/navigation";
import Years from "@/data/years.json";
import { useTest } from "@/contexts/test-context";
import { useRouter } from "next/navigation";
import Departments from "@/data/departments.json";
import BottomRightLogo from "@/components/bottom-right-logo";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col w-full h-full items-center justify-center space-y-4">
        <Image
          src={`/${department.id}.png`}
          width={96}
          height={96}
          alt={department.name}
          className="select-none"
        />
        <div className="text-center space-y-1">
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
        <div className="grid text-center space-y-4 pt-10">
          <Link
            href={year.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-identity-cloud text-identity-esc rounded-xl font-semibold text-xl"
          >
            สมัครเลย!
          </Link>
          <Link
            href={`/${year.id}/test/1`}
            className="px-4 py-2 border-2 border-identity-cloud rounded-xl font-medium text-sm"
          >
            ทำแบบทดสอบอีกครั้ง
          </Link>
        </div>
      </div>
      <BottomRightLogo />
    </>
  );
}
