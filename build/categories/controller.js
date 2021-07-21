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
const entity_1 = require("../products/entity");
const entity_2 = require("./entity");
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        entity_2.Category.findAndCount({ relations: ['products'] })
            .then(([categories, categoriesCount]) => {
            res.json({
                count: categoriesCount,
                categories: categories,
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
        entity_2.Category.findOne({ name: name }, { relations: ['products'] })
            .then(category => {
            res.json({
                category: category
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
        entity_2.Category.findOne(id, { relations: ['products'] })
            .then(category => {
            res.json({
                category: category
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
        let products = [];
        if (req.body.products) {
            products = req.body.products.map(id => { return { id: id }; });
        }
        const category = new entity_2.Category();
        category.name = req.body.name;
        category.products = products.length > 0 ? yield entity_1.Product.find({
            where: products
        }) : req.body.products;
        category.description = req.body.description;
        entity_2.Category.save(category)
            .then(category => {
            res.json({
                msg: 'Successfully inserted',
                category: category
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
        entity_2.Category.delete({ id: id })
            .then(category => {
            res.json({
                msg: 'Successfully deleted',
                category: category
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
        let products = [];
        if (req.body.products) {
            products = req.body.products.map(id => { id: id; });
        }
        const category = new entity_2.Category();
        category.id = parseInt(req.params.id);
        category.name = req.body.name;
        category.products = req.body.products ? yield entity_1.Product.find({
            where: products
        }) : req.body.products;
        category.description = req.body.description;
        entity_2.Category.save(category)
            .then(category => {
            res.json({
                msg: 'Successfully updated',
                category: category
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
