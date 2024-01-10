"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var verification_email_1 = require("../../components/email/verification-email");
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token, user = _a.user;
                return (0, verification_email_1.VerificationEmailHtml)({
                    name: user.name,
                    href: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token),
                });
            },
            generateEmailSubject: function (_a) {
                var user = _a.user;
                return "Welcome ".concat(user.name, ", verify your email");
            },
        },
    },
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "role",
            type: "select",
            defaultValue: "user",
            required: true,
            options: [
                { label: "User", value: "user" },
                { label: "Admin", value: "admin" },
            ],
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
    ],
};
