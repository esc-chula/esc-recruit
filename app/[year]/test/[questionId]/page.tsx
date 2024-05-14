import { notFound } from "next/navigation";
import Years from "@/data/years.json";
import Questions from "@/data/questions.json";
import BottomRightLogo from "@/components/bottom-right-logo";
import Choices from "@/components/choices";

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
    <>
      <div className="flex flex-col items-center h-full w-full justify-center space-y-10 pb-20">
        <h1 className="font-bold text-2xl text-center">{question.question}</h1>
        <div className="flex flex-col space-y-5 w-full">
          <Choices question={question} />
        </div>
      </div>
      <BottomRightLogo />
    </>
  );
}
