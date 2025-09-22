"use strict";
//Arthur Steiner Morais Silva
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const router = (0, express_1.Router)();
router.get("/", productController_1.getAllProducts);
router.post("/", productController_1.createProduct);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map