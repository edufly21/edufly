"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alert = {
    slug: "alert",
    fields: [
        {
            name: "type",
            type: "select",
            options: [
                {
                    value: "info",
                    label: "Info",
                },
                {
                    value: "success",
                    label: "Success",
                },
                {
                    value: "warning",
                    label: "Warning",
                },
                {
                    value: "danger",
                    label: "Danger",
                },
            ],
        },
        {
            name: "message",
            type: "textarea",
        },
    ],
};
exports.default = Alert;
