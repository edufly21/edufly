"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var site_1 = require("../config/site");
var nodemailer_1 = __importDefault(require("nodemailer"));
var transport = nodemailer_1.default.createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
    },
});
var email = {
    transport: transport,
    fromName: site_1.siteConfig.name,
    fromAddress: process.env.FROM_EMAIL,
};
exports.default = email;
