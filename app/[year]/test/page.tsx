import Years from "@/data/years.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function TestPage({ params }: { params: { year: string } }) {
  const year = Years.find((year) => year.id.toString() === params.year);

  if (!year) {
    return notFound();
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold leading-8">ชื่อแบบทดสอบ</h1>
        <p>คำอธิบายนิดหน่อย ใครก้ได้ช่วยคิดคำที</p>
      </div>
      <Link
        href={`/${year.id}/test/1`}
        className="rounded-xl bg-identity-cloud px-4 py-2 font-semibold text-identity-esc"
      >
        เริ่มทำแบบทดสอบ
      </Link>
    </div>
  );
}
