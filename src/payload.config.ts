import Icon from "./components/graphics/icon";
import Logo from "./components/graphics/logo";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { siteConfig } from "./config/site";
import { Blogs } from "./lib/collections/blogs";
import { Media } from "./lib/collections/media";
import { Users } from "./lib/collections/users";

import { webpackBundler } from "@payloadcms/bundler-webpack";
import dotenv from "dotenv";
import path from "path";
import { Products } from "./lib/collections/products";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// const storageAdapter = s3Adapter({
//   config: {
//     endpoint: process.env.AWS_S3_API_ENDPOINT!,
//     credentials: {
//       accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
//       secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
//     },
//   },
//   bucket: process.env.AWS_S3_BUCKET_NAME!,
// });

export default buildConfig({
  serverURL: process.env.next_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Blogs, Media],
  routes: {
    admin: "/dashboard",
  },
  telemetry: false,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),

    meta: {
      titleSuffix: ` - ${siteConfig.name}`,
      favicon: "/favicon.ico",
      ogImage: "/og-image.svg",
    },
    components: {
      // beforeLogin: [BeforeLogin],
      graphics: {
        Logo,
        Icon,
      },
    },
    css: path.resolve(__dirname, "./styles/payload-admin.scss"),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "./types/payload-types.ts"),
  },
  // plugins: [
  //   cloudStorage({
  //     collections: {
  //       media: {
  //         adapter: storageAdapter, // see docs for the adapter you want to use
  //       },
  //     },
  //   }),
  // ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
});
