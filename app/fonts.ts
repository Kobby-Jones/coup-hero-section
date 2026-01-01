import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
