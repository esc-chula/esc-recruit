import BackButton from "@/components/back-button";
import Years from "@/data/years.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function TestPage({ params }: { params: { year: string } }) {
  const year = Years.find((year) => year.id.toString() === params.year);

  if (!year) {
    return notFound();
  }

  return (
    <>
      <BackButton href={`/${year.id}`} />
      <div className="flex h-full w-full flex-col items-center justify-center space-y-10 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold leading-10">
            คุณเหมาะกับ
            <br />
            ฝ่ายไหนในกวศ.?
          </h1>
          <p className="w-full max-w-64 text-xs leading-5">
            แบบทดสอบนี้มีไว้เพื่อความบันเทิง
            และความน่าจะเป็นของความเข้ากันได้ของผู้เล่นและฝ่ายต่าง ๆ ในกวศ.
            เท่านั้น ไม่สามารถนำมาชี้วัดบุคลิกภาพของตัวบุคคล
            หรือกำหนดว่าผู้เล่นควรจะเลือกสมัครฝ่ายใดในกวศ. ได้ เรียนรู้ว่ากวศ.
            ฝ่ายต่าง ๆ ทำอะไรบ้าง และคุณเหมาะกับฝ่ายใดได้ที่ @escchula
          </p>
        </div>
        <Link
          href={`/${year.id}/test/1`}
          className="rounded-xl bg-identity-cloud px-4 py-2 font-semibold text-identity-esc"
        >
          เริ่มทำแบบทดสอบ
        </Link>
      </div>
    </>
  );
}
