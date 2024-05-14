import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexSansThai, manrope } from "./lib/font";
import TestProvider from "./contexts/test-context";

export const metadata: Metadata = {
  title: "ESC Recruitment",
  description: "รับสมัครเพื่อนร่วมทีม กวศ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
      </head>
      <body
        className={`${manrope.variable} ${ibmPlexSansThai.variable} flex justify-center h-full bg-[url('/background.svg')] bg-[length:400px_400px] bg-center`}
      >
        <div className="flex flex-col w-full min-h-svh max-w-2xl px-4">
          <TestProvider>{children}</TestProvider>
        </div>
      </body>
    </html>
  );
}
