"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
var checkRole = function (role, user) {
    if (!user)
        return false;
    return user.role === role;
};
exports.checkRole = checkRole;
