import { notFound } from "next/navigation";
import Years from "@/data/years.json";

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

  return <div>{params.year}</div>;
}
