"use client";

import { Choice } from "@/types/question";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface TestContextType {
  addAnswer: (answer: Choice) => void;
  removeAnswerAtIdx: (idx: number) => void;
  summarizeAnswers: () => [string, number][];
}

export const TestContext = createContext<TestContextType>({
  addAnswer: () => {},
  removeAnswerAtIdx: () => {},
  summarizeAnswers: () => [],
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
    const summary = {} as Record<string, number>;

    answers.forEach((answer) => {
      Object.entries(answer.weight).forEach(([key, value]) => {
        if (!summary[key]) {
          summary[key] = 0;
        }

        summary[key] += value as number;
      });
    });

    return Object.entries(summary).sort((a, b) => b[1] - a[1]);
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
