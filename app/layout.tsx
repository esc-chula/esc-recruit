import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import TestProvider from "./contexts/test-context";
import "./globals.css";
import { ibmPlexSansThai, manrope } from "./lib/font";

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
      </head>
      <GoogleAnalytics gaId="G-MS6WZH6337" />
      <body
        className={`${manrope.variable} ${ibmPlexSansThai.variable} flex h-full justify-center bg-[url('/background.svg')] bg-[length:400px_400px] bg-center px-4`}
      >
        <div className="flex min-h-svh w-full max-w-2xl flex-col">
          <TestProvider>{children}</TestProvider>
        </div>
      </body>
    </html>
  );
}
