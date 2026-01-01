import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        feebleBlue: "#007AFF", // primary CTA & background
        badgeBlue: "rgba(0, 111, 232, 1)",
        navGray: "rgba(140, 151, 168, 1)",
        macText: "rgba(29, 32, 38, 1)",
        borderGray: "rgba(108, 120, 143, 1)",
        birdInk: "rgba(0, 51, 107, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

