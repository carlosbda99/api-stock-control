"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get('/product', controller_1.findOne);
router.get('/products/:id', controller_1.findOneById);
router.get('/products', controller_1.findAll);
router.post('/products', controller_1.insertOne);
router.delete('/products/:id', controller_1.deleteOne);
router.patch('/products/:id', controller_1.updateOne);
exports.default = router;
