"use client";

import { useTest } from "@/contexts/test-context";
import { Question } from "@/types/question";
import { useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import Questions from "@/data/questions.json";

export default function Choices({ question }: { question: Question }) {
  const router = useRouter();
  const { addAnswer } = useTest();

  return (
    <>
      {question.choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => {
            addAnswer(choice);

            if (question.id === Questions.length) {
              router.push(`/${question.yearId}/test/result`);
              return;
            }

            router.push(`/${question.yearId}/test/${question.id + 1}`);
          }}
          className="rounded-xl bg-white text-identity-carbon p-4 font-semibold flex items-center justify-between"
        >
          <span>{choice.title}</span>
          <FiChevronRight size={24} />
        </button>
      ))}
    </>
  );
}
