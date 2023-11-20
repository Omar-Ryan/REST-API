"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
const errorHandle = (err, req, res, next) => {
    console.error(err.stack);
    res.status(400).send(err.message);
};
exports.errorHandle = errorHandle;
