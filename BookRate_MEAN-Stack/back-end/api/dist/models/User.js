"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user model in database
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: String,
    password: String
});
exports.default = mongoose_1.model('User', schema);
// export const User = model('User', schema);
