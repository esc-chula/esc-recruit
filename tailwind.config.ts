import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        identity: {
          esc: "rgb(var(--identity-esc-rgb))",
          cloud: "rgb(var(--identity-cloud-rgb))",
          carbon: "rgb(var(--identity-carbon-rgb))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
