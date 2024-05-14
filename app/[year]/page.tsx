import { notFound } from "next/navigation";
import Years from "@/data/years.json";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col items-center h-full w-full justify-center space-y-16">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src="/logo.svg"
          width={96}
          height={96}
          alt={"esc logo"}
          className="select-none"
        />
        <div className="text-center space-y-4">
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
      <div className="grid text-center space-y-4">
        <Link
          href="/"
          className="px-4 py-2 bg-identity-cloud text-identity-esc rounded-xl font-semibold text-xl"
        >
          ฟอร์มรับสมัคร
        </Link>
        <Link
          href={`/${year.id}/test/1`}
          className="px-4 py-2 border-2 border-identity-cloud rounded-xl font-medium text-sm"
        >
          เราเหมาะกับฝ่ายไหนใน กวศ. กันนะ?
        </Link>
      </div>
    </div>
  );
}
