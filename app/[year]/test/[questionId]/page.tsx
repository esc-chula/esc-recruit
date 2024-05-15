import BottomRightLogo from "@/components/bottom-right-logo";
import Choices from "@/components/choices";
import Transition from "@/components/transition";
import Questions from "@/data/questions.json";
import Years from "@/data/years.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Questions.map((question) => ({
    questionId: question.id.toString(),
  }));
}

export default function QuestionPage({
  params,
}: {
  params: { year: string; questionId: string };
}) {
  const year = Years.find((year) => year.id.toString() === params.year);

  const question = Questions.find(
    (question) => question.id.toString() === params.questionId,
  );

  if (!year || !question || question.yearId.toString() !== params.year) {
    return notFound();
  }

  return (
    <>
      {/* <BackButton
        href={
          question.id === 1
            ? `/${year.id}/test`
            : `/${year.id}/test/${question.id - 1}`
        }
      /> */}
      {question.transitions?.map((transition, index) => (
        <Transition key={transition} index={index} title={transition} />
      ))}
      <div className="flex h-full w-full flex-col items-center justify-center space-y-10 pb-20">
        <h1 className="text-center text-2xl font-bold">{question.question}</h1>
        <div className="flex w-full flex-col space-y-5">
          <Choices question={question} />
        </div>
      </div>
      <BottomRightLogo />
    </>
  );
}
