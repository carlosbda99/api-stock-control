"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get('/provider', controller_1.findOne);
router.get('/providers/:id', controller_1.findOneById);
router.get('/providers', controller_1.findAll);
router.post('/providers', controller_1.insertOne);
router.delete('/providers/:id', controller_1.deleteOne);
router.patch('/providers/:id', controller_1.updateOne);
exports.default = router;
