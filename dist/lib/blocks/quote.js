"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quote = {
    slug: "quote",
    imageURL: "http://localhost:3000/media/quote.png",
    imageAltText: "Quote block",
    fields: [
        {
            name: "quote",
            type: "textarea",
        },
        {
            name: "author",
            type: "text",
        },
    ],
};
exports.default = Quote;
