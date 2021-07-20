"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get('/category', controller_1.findOne);
router.get('/categories/:id', controller_1.findOneById);
router.get('/categories', controller_1.findAll);
router.post('/categories', controller_1.insertOne);
router.delete('/categories/:id', controller_1.deleteOne);
router.patch('/categories/:id', controller_1.updateOne);
exports.default = router;
