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
const check_string_1 = __importDefault(require("./check_string"));
function stringAnalyze(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = req.body.text;
        const startTime = new Date().getTime();
        const vogal = yield check_string_1.default(text);
        const endTime = new Date().getTime();
        res.json({
            string: text,
            vogal: vogal,
            tempoTotal: `${endTime - startTime}ms`,
            requisitos: 'O primeiro caractere Vogal, após uma consoante, onde a mesma é antecessora a uma vogal e que não se repita na string.'
        });
    });
}
exports.default = stringAnalyze;
