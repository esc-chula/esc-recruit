import Years from "@/data/years.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Years.map((year) => ({
    year: year.id.toString(),
  }));
}

export default function YearPage({ params }: { params: { year: string } }) {
  const year = Years.find((year) => year.id.toString() === params.year);

  if (!year) {
    return notFound();
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-16">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src="/logo.svg"
          width={96}
          height={96}
          alt={"esc logo"}
          className="select-none"
        />
        <div className="space-y-4 text-center">
          <h1 className="font-bold leading-8">
            <span className="text-3xl">We’re Recruiting!</span>
            <br />
            <span className="text-2xl">รับสมัครเพื่อนร่วมทีม กวศ.67</span>
          </h1>
          <p className="text-sm">
            ตั้งแต่วันนี้ - 20 พฤษภาคม 2567
            <br />
            โดยจะมีการสัมภาษณ์ตั้งแต่วันที่ 27-31 พฤษภาคม 2567
          </p>
        </div>
      </div>
      <div className="grid space-y-4 text-center">
        <Link
          href={year.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-identity-cloud px-4 py-2 text-xl font-semibold text-identity-esc"
        >
          ฟอร์มรับสมัคร
        </Link>
        <Link
          href={`/${year.id}/test`}
          className="rounded-xl border-2 border-identity-cloud px-4 py-2 text-sm font-medium"
        >
          เราเหมาะกับฝ่ายไหนใน กวศ. กันนะ?
        </Link>
      </div>
    </div>
  );
}
