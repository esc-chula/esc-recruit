"use client";

import { Choice } from "@/types/question";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface TestContextType {
  addAnswer: (answer: Choice) => void;
  removeAnswerAtIdx: (idx: number) => void;
  summarizeAnswers: () => [string, number] | undefined;
}

export const TestContext = createContext<TestContextType>({
  addAnswer: () => {},
  removeAnswerAtIdx: () => {},
  summarizeAnswers: () => undefined,
});

export default function TestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [answers, setAnswers] = useState<Choice[]>([]);

  const addAnswer = (answer: Choice) => {
    setAnswers((prev) => [...prev, answer]);
  };

  const removeAnswerAtIdx = (idx: number) => {
    setAnswers((prev) => prev.filter((_, i) => i !== idx));
  };

  const summarizeAnswers = () => {
    const departmentMap = answers.reduce((acc, answer) => {
      if (acc[answer.department]) {
        acc[answer.department] += answer.weight;
      } else {
        acc[answer.department] = answer.weight;
      }

      return acc;
    }, {} as Record<string, number>);

    const maxWeight = Math.max(...Object.values(departmentMap));
    const department = Object.entries(departmentMap).find(
      ([, weight]) => weight === maxWeight
    );

    return department;
  };

  useEffect(() => {
    const questionId = pathname.split("/").pop();

    if (questionId && !isNaN(parseInt(questionId))) {
      const idx = parseInt(questionId) - 1;
      setAnswers((prev) => prev.slice(0, idx));
    }
  }, [pathname]);

  return (
    <TestContext.Provider
      value={{
        addAnswer,
        removeAnswerAtIdx,
        summarizeAnswers,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export const useTest = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error("useTest must be used within a TestProvider");
  }

  return context;
};
