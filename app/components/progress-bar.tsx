"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progressPercent = (current / total) * 100;

  return (
    <div className="w-full px-6 flex justify-center">
      <div className="h-2 w-full rounded-full bg-gray-300 ">
        <div
          className="h-full rounded-full bg-identity-cloud transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
