"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInAuthCredentialsValidator = exports.SignUpAuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.SignUpAuthCredentialsValidator = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, {
        message: "Your first name must be at least three characters long.",
    })
        .max(17, {
        message: "Your first name must NOT exceed 17 characters long.",
    }),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
});
exports.SignInAuthCredentialsValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
});
