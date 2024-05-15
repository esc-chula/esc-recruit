"use client";

import { useState } from "react";

export default function Transition({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  const [hide, setHide] = useState<boolean>(false);

  if (hide) {
    return null;
  }

  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center space-y-10 bg-[url('/background.svg')] bg-[length:400px_400px] bg-center px-4 text-center"
      style={{
        zIndex: 49 - index,
      }}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={() => setHide(true)}
        className="rounded-lg border-2 border-identity-cloud px-3 py-1.5 font-medium text-identity-cloud"
      >
        ถัดไป
      </button>
    </div>
  );
}
