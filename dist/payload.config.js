"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env"),
});
var config_1 = require("payload/config");
var site_1 = require("./config/site");
// import Logo from "./payload/components/graphics/logo";
// import Icon from "./payload/components/graphics/icon";
var users_1 = require("./lib/collections/users");
var blogs_1 = require("./lib/collections/blogs");
// import { Pages } from "./collections/pages";
var media_1 = require("./lib/collections/media");
// import { Pages } from "./collections/Pages";
var storageAdapter = (0, s3_1.s3Adapter)({
    config: {
        endpoint: process.env.AWS_S3_API_ENDPOINT,
        credentials: {
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        },
    },
    bucket: process.env.AWS_S3_BUCKET_NAME,
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.next_PUBLIC_SERVER_URL || "",
    collections: [users_1.Users, blogs_1.Blogs, media_1.Media],
    routes: {
        admin: "/dashboard",
    },
    telemetry: false,
    admin: {
        user: users_1.Users.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        // buildPath: path.resolve(process.cwd(), "dist"),
        meta: {
            titleSuffix: " - ".concat(site_1.siteConfig.name),
            // favicon: "/favicon.ico",
            // ogImage: "/opengraph.png",
        },
        // components: {
        //   // beforeLogin: [BeforeLogin],
        //   graphics: {
        //     Logo,
        //     Icon,
        //   },
        // },
        // css: path.resolve(__dirname, "./styles/admin.scss"),
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URI,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "./types/payload-types.ts"),
    },
    plugins: [
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                media: {
                    adapter: storageAdapter, // see docs for the adapter you want to use
                },
            },
        }),
    ],
    upload: {
        limits: {
            fileSize: 5000000, // 5MB
        },
    },
});
