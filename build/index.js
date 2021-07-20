"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const router_1 = __importDefault(require("./utils/router"));
const router_2 = __importDefault(require("./products/router"));
const router_3 = __importDefault(require("./providers/router"));
const router_4 = __importDefault(require("./categories/router"));
const conn_1 = __importDefault(require("./db/conn"));
conn_1.default
    .then((conn) => {
    console.log('Successfully connected to database!');
})
    .catch((error) => console.log(error));
const routers = [router_1.default, router_2.default, router_3.default, router_4.default];
const PORT = process.env.API_PORT;
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
app.use('/api/v1/', routers);
app.get('/', (req, res) => {
    res.json({
        msg: 'Sucesso'
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
