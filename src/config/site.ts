import { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Madoobe.com",
  description:
    "Discover EduGifts: your go-to cyber haven for gifts, photo albums, and electronics. Elevate your gifting game effortlessly.",
  url: process.env.NEXT_PUBLIC_SERVER_URL as string,
  links: [],
};
