import { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Edufly",
  description:
    "Discover EduGifts: your go-to cyber haven for gifts, photo albums, and electronics. Elevate your gifting game effortlessly.",
  url: process.env.next_PUBLIC_SERVER_URL! || "https://localhost:3000",
  ogImage: `${
    process.env.next_PUBLIC_SERVER_URL || "https://localhost:3000"
  }/og-image.svg`,
  links: [],
};
