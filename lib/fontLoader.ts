import { Lora, Poppins } from "next/font/google";

const loraFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const FONTS = {
  lora: loraFont,
  poppins: poppinsFont,
};
