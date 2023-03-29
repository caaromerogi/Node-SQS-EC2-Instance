"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
var UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
