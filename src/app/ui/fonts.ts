import { Inter as FontSans } from "next/font/google";
import { Sansita } from "next/font/google";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sansita",
});

export { fontSans, fontSansita };
