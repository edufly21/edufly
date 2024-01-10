"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
var check_role_1 = require("../payload-utils/check-role");
var admin = function (_a) {
    var user = _a.req.user;
    return (0, check_role_1.checkRole)("admin", user);
};
exports.admin = admin;
