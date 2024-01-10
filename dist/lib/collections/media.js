"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var admin_1 = require("../access/admin");
exports.Media = {
    slug: "media",
    access: {
        read: admin_1.admin,
        delete: admin_1.admin,
        update: admin_1.admin,
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin";
        },
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
            {
                name: "thumbnail",
                width: 400,
                height: 300,
                position: "centre",
            },
            {
                name: "card",
                width: 768,
                height: 1024,
                position: "centre",
            },
            {
                name: "tablet",
                width: 1024,
                height: undefined,
                position: "centre",
            },
        ],
        mimeTypes: ["image/*"],
        adminThumbnail: "thumbnail",
    },
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
};
