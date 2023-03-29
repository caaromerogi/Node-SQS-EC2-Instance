"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var User_1 = require("../Controllers/User");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/users', User_1.getUsers);
router.post('/users', User_1.postUser);
