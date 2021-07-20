"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.insertOne = exports.findOneById = exports.findAll = exports.findOne = void 0;
const entity_1 = require("./entity");
const entity_2 = require("../providers/entity");
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield entity_1.Product.findAndCount({ relations: ["category", "providers"] })
            .then(([products, productCount]) => {
            res.json({
                count: productCount,
                products: products,
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.findAll = findAll;
function findOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.body.name;
        entity_1.Product.findOne({ name: name }, { relations: ["category"] })
            .then(product => {
            res.json({
                product: product
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.findOne = findOne;
function findOneById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        entity_1.Product.findOne({ id: id }, { relations: ["capture_id", "providers"] })
            .then(product => {
            res.json({
                product: product
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.findOneById = findOneById;
function insertOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let providers = [];
        if (req.body.providers) {
            providers = req.body.providers.map(id => {
                return { id: id };
            });
        }
        const product = new entity_1.Product();
        product.name = req.body.name;
        product.providers = req.body.providers ? yield entity_2.Provider.find({ where: providers }) : req.body.providers;
        product.description = req.body.description;
        product.stock = req.body.stock;
        product.category = req.body.category;
        product.width = req.body.width;
        product.height = req.body.height;
        product.lenght = req.body.lenght;
        product.value = req.body.value;
        yield product.save()
            .then(product => {
            res.json({
                msg: 'Successfully inserted',
                product: product
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.insertOne = insertOne;
function deleteOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        entity_1.Product.delete({ id: id })
            .then(product => {
            res.json({
                msg: 'Successfully deleted',
                product: product
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.deleteOne = deleteOne;
function updateOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let providers = [];
        if (req.body.providers) {
            providers = req.body.providers.map(id => {
                return { id: id };
            });
        }
        const product = new entity_1.Product();
        product.id = parseInt(req.params.id);
        product.name = req.body.name;
        product.providers = req.body.providers ? yield entity_2.Provider.find({ where: providers }) : req.body.providers;
        product.description = req.body.description;
        product.stock = req.body.stock;
        product.category = req.body.category;
        product.width = req.body.width;
        product.height = req.body.height;
        product.lenght = req.body.lenght;
        product.value = req.body.value;
        entity_1.Product.save(product)
            .then(product => {
            res.json({
                msg: 'Successfully updated',
                product: product
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            });
        });
    });
}
exports.updateOne = updateOne;
