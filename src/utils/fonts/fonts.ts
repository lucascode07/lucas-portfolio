import { Poppins, Roboto_Slab } from "next/font/google";

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});
