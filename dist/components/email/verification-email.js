"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationEmailHtml = exports.VerificationEmail = void 0;
var react_1 = __importDefault(require("react"));
var components_1 = require("@react-email/components");
var site_1 = require("../../config/site");
var VerificationEmail = function (_a) {
    var name = _a.name, href = _a.href;
    return (react_1.default.createElement(components_1.Html, null,
        react_1.default.createElement(components_1.Head, null),
        react_1.default.createElement(components_1.Preview, null,
            "Confirm Your Email and Dive into a World of Books at ",
            site_1.siteConfig.name,
            "!"),
        react_1.default.createElement(components_1.Body, { style: main },
            react_1.default.createElement(components_1.Container, { style: container },
                react_1.default.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/assets/illustrations/welcome.svg"), width: "150", height: "150", alt: "welcome", style: logo }),
                react_1.default.createElement(components_1.Text, { style: paragraph }, name ? "Dear ".concat(name, ",") : "Hi there,"),
                react_1.default.createElement(components_1.Text, { style: paragraph },
                    "Thank you for registering with the ",
                    site_1.siteConfig.name,
                    ". To ensure the security of your account and provide you with access to our resources, we kindly ask you to verify your email address."),
                react_1.default.createElement(components_1.Section, { style: btnContainer },
                    react_1.default.createElement(components_1.Button, { style: button, href: href }, "Verify email")),
                react_1.default.createElement(components_1.Text, { style: paragraph },
                    "Best,",
                    react_1.default.createElement("br", null),
                    "The ",
                    site_1.siteConfig.name,
                    " team"),
                react_1.default.createElement(components_1.Hr, { style: hr }),
                react_1.default.createElement(components_1.Text, { style: footer },
                    "If you did not register for an account with ",
                    site_1.siteConfig.name,
                    ", please disregard this email or contact our support team immediately.")))));
};
exports.VerificationEmail = VerificationEmail;
var VerificationEmailHtml = function (props) {
    return (0, components_1.render)(react_1.default.createElement(exports.VerificationEmail, __assign({}, props)), { pretty: true });
};
exports.VerificationEmailHtml = VerificationEmailHtml;
var main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
var container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};
var logo = {
    margin: "0 auto",
};
var paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};
var btnContainer = {
    textAlign: "center",
};
var button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "0.75em 1.5em",
};
var hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};
var footer = {
    color: "#8898aa",
    fontSize: "12px",
};
