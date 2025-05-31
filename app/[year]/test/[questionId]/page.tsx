import BottomRightLogo from "@/components/bottom-right-logo";
import Choices from "@/components/choices";
import Transition from "@/components/transition";
import Questions from "@/data/questions.json";
import Years from "@/data/years.json";
import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import ProgressBar from "@/components/progress-bar";

export async function generateStaticParams() {
  return Questions.map((question) => ({
    year: question.yearId.toString(),
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
    (question) =>
      question.id.toString() === params.questionId &&
      question.yearId.toString() === params.year
  );

  if (!year || !question || question.yearId.toString() !== params.year) {
    return notFound();
  }

  const questionsOfYear = Questions.filter(
    (q) => q.yearId.toString() === params.year
  );

  const isLastQuestion =
    question.id ===
    questionsOfYear.reduce((maxId, q) => (q.id > maxId ? q.id : maxId), 0);

  const sortedQuestions = [...questionsOfYear].sort((a, b) => a.id - b.id);
  const currentIndex =
    sortedQuestions.findIndex(
      (q) => q.id.toString() === params.questionId
    ) + 1;
  const totalQuestions = sortedQuestions.length+1;

  return (
  <>
    <BackButton
      href={
        question.id === 1
          ? `/${year.id}/test`
          : `/${year.id}/test/${question.id - 1}`
      }
    />
    
    {question.transitions?.map((transition, index) => (
      <Transition key={transition} index={index} title={transition} />
    ))}
    <div className="flex h-full w-full flex-col items-center justify-center space-y-10 py-6">
      <h1 className="text-center text-2xl font-bold">{question.question}</h1>
      <div className="flex w-full flex-col space-y-5">
        <Choices question={question} isLastQuestion={isLastQuestion} />
      </div>
      <ProgressBar current={currentIndex} total={totalQuestions} />
    </div>
    <BottomRightLogo />
  </>
  );
}
