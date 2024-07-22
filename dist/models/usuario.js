"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/user.ts
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('User', userSchema);
