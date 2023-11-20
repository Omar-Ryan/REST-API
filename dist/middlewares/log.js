"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const Logger = (req, res, next) => {
    console.log(`${req.timestamp} ${req.method} ${req.ip} ${req.originalUrl}`);
    next();
};
exports.Logger = Logger;
