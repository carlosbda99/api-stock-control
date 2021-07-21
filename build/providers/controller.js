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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.insertOne = exports.findOneById = exports.findAll = exports.findOne = void 0;
const conn_1 = __importDefault(require("../db/conn"));
const entity_1 = require("../products/entity");
const entity_2 = require("./entity");
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        entity_2.Provider.findAndCount({ relations: ['products'] })
            .then(([providers, providerCount]) => {
            res.json({
                count: providerCount,
                providers: providers,
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
        entity_2.Provider.findOne({ name: name }, { relations: ['products'] })
            .then(provider => {
            res.json({
                provider: provider
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
        entity_2.Provider.findOne({ id: id }, { relations: ['products'] })
            .then(provider => {
            res.json({
                provider: provider
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
        const provider = new entity_2.Provider();
        provider.cnpj = req.body.cnpj;
        provider.name = req.body.name;
        provider.phone = req.body.phone;
        provider.products = products.length > 0 ? yield entity_1.Product.find({
            where: products
        }) : req.body.products;
        entity_2.Provider.insert(provider)
            .then(provider => {
            res.json({
                msg: 'Successfully inserted',
                provider: provider.raw[0]
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
        entity_2.Provider.delete({ id: id })
            .then(provider => {
            res.json({
                msg: 'Successfully deleted',
                provider: provider
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
        const provider = new entity_2.Provider();
        provider.id = parseInt(req.params.id);
        provider.name = req.body.name;
        provider.cnpj = req.body.cnpj;
        provider.phone = req.body.phone;
        (yield conn_1.default).manager.update(entity_2.Provider, { id: parseInt(req.params.id) }, provider)
            .then(provider => {
            res.json({
                msg: 'Successfully updated',
                provider: provider
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
