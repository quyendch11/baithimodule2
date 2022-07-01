"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, amount, describe, datecreat) {
        this._id = 0;
        this._type = 'available';
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._describe = describe;
        this._datecreat = datecreat;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    set type(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
    set price(value) {
        this._price = value;
    }
    get price() {
        return this._price;
    }
    set amount(value) {
        this._amount = value;
    }
    get amount() {
        return this._amount;
    }
    set describe(value) {
        this._describe = value;
    }
    get describe() {
        return this._describe;
    }
    set datecreat(value) {
        this._datecreat = value;
    }
    get datecreat() {
        return this._datecreat;
    }
}
exports.Product = Product;
