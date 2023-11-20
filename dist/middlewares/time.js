"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestamp = void 0;
const AddTimestamp = (req, res, next) => {
    req.timestamp = Date.now();
    next();
};
exports.AddTimestamp = AddTimestamp;
