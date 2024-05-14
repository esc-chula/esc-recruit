"use client";

import { useTest } from "@/contexts/test-context";
import { Question } from "@/types/question";
import { useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import Questions from "@/data/questions.json";
import Departments from "@/data/departments.json";

export default function Choices({ question }: { question: Question }) {
  const router = useRouter();
  const { addAnswer, summarizeAnswers } = useTest();

  return (
    <>
      {question.choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => {
            addAnswer(choice);

            if (question.id === Questions.length) {
              const result = summarizeAnswers();
              if (!result || result.length === 0) {
                router.push("/");
                return null;
              }

              const departmentId = result[0][0];
              const department = Departments.find(
                (dep) => dep.id === departmentId
              );
              if (!department) {
                router.push("/");
                return null;
              }

              router.push(
                `/${question.yearId}/test/result?department=${department.id}`
              );
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
