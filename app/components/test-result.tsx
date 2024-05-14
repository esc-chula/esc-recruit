"use client";

import { useTest } from "@/contexts/test-context";
import { useRouter } from "next/navigation";
import Departments from "@/data/departments.json";

export default function TestResult() {
  const router = useRouter();
  const { summarizeAnswers } = useTest();

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

  return <h1 className="text-4xl font-bold">{department.name}!</h1>;
}
