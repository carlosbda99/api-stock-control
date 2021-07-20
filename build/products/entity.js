"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../providers/entity");
const entity_2 = require("../categories/entity");
let Product = class Product extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 20,
        unique: true
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        length: 120,
        nullable: true
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    typeorm_1.ManyToOne(() => entity_2.Category, category => category.products),
    __metadata("design:type", entity_2.Category)
], Product.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToMany(() => entity_1.Provider, provider => provider.products),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Product.prototype, "providers", void 0);
__decorate([
    typeorm_1.Column({
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "value", void 0);
__decorate([
    typeorm_1.Column({
        default: true
    }),
    __metadata("design:type", Boolean)
], Product.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "width", void 0);
__decorate([
    typeorm_1.Column({
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "height", void 0);
__decorate([
    typeorm_1.Column({
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "lenght", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Product.prototype, "updated_at", void 0);
Product = __decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;
