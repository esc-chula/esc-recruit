import { notFound } from "next/navigation";
import Years from "@/data/years.json";
import Questions from "@/data/questions.json";

export async function generateStaticParams() {
  return Questions.map((question) => ({
    questionId: question.id.toString(),
  }));
}

export default function TestPage({
  params,
}: {
  params: { year: string; questionId: string };
}) {
  const year = Years.find((year) => year.id.toString() === params.year);

  const question = Questions.find(
    (question) => question.id.toString() === params.questionId
  );

  if (!year || !question || question.yearId.toString() !== params.year) {
    return notFound();
  }

  return (
    <div>
      {params.year} {params.questionId}
    </div>
  );
}
