"use strict";
//Arthur Steiner Morais Silva
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = void 0;
const getAll = () => [
    { id: "1", name: "Notebook", price: 2500 },
    { id: "2", name: "Mouse", price: 150 }
];
exports.getAll = getAll;
const create = (name, price) => ({
    id: String(Date.now()),
    name,
    price
});
exports.create = create;
//# sourceMappingURL=productBusiness.js.map