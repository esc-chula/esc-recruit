"use client";

import { useTest } from "@/contexts/test-context";
import { useRouter } from "next/navigation";
import Departments from "@/data/departments.json";

export default function TestResult() {
  const router = useRouter();
  const { summarizeAnswers } = useTest();

  const result = summarizeAnswers();

  if (!result) {
    router.push("/");
    return null;
  }

  const [resultDepartment, _] = result;
  const department = Departments.find(
    (department) => department.id === resultDepartment
  );

  if (!department) {
    router.push("/");
    return null;
  }

  return <h1 className="text-4xl font-bold">{department?.name.th}!</h1>;
}
