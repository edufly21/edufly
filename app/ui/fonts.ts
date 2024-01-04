import { Inter } from "next/font/google";
import { Sansita } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sansita",
});

export { inter, sansita };
