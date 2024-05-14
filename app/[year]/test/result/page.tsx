import { notFound } from "next/navigation";
import Years from "@/data/years.json";
import TestResult from "@/components/test-result";

export default function ResultPage({ params }: { params: { year: string } }) {
  const year = Years.find((year) => year.id.toString() === params.year);

  if (!year) {
    return notFound();
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <p className="text-lg">คุณเหมาะกับฝ่าย</p>
      <TestResult />
    </div>
  );
}
