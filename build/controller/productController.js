"use strict";
//Arthur Steiner Morais Silva
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getAllProducts = void 0;
const express_1 = require("express");
const productData_1 = require("../data/productData");
const getAllProducts = (req, res) => {
    const products = (0, productData_1.getProducts)();
    res.json(products);
};
exports.getAllProducts = getAllProducts;
const createProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price)
        return res.status(400).json({ error: "Faltando nome ou preço" });
    const product = (0, productData_1.addProduct)(name, price);
    res.status(201).json(product);
};
exports.createProduct = createProduct;
//# sourceMappingURL=productController.js.map