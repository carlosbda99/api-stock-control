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
exports.Provider = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../products/entity");
let Provider = class Provider extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Provider.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 20,
        unique: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        unique: true,
        length: 18
    }),
    __metadata("design:type", String)
], Provider.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.ManyToMany(() => entity_1.Product, product => product.providers),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Provider.prototype, "products", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({
        default: true
    }),
    __metadata("design:type", Boolean)
], Provider.prototype, "active", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Provider.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Provider.prototype, "updated_at", void 0);
Provider = __decorate([
    typeorm_1.Entity()
], Provider);
exports.Provider = Provider;
