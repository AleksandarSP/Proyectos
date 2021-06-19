"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// admin user model for database
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    adminId: String,
    password: String
});
exports.default = mongoose_1.model('AdminUser', schema);
