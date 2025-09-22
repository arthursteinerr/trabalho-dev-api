"use strict";
//Arthur Steiner Morais Silva
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProducts = void 0;
const productBusiness_1 = require("../business/productBusiness");
const getProducts = () => (0, productBusiness_1.getAll)();
exports.getProducts = getProducts;
const addProduct = (name, price) => (0, productBusiness_1.create)(name, price);
exports.addProduct = addProduct;
//# sourceMappingURL=productData.js.map