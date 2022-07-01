"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const product_1 = require("./product");
const productmanagement_1 = require("./productmanagement");
const rl = __importStar(require("readline-sync"));
class Menu {
    constructor() {
        this.productmanagement = new productmanagement_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('----Quản lý sản phẩm---');
            console.log('1. Hiển thị tất cả sản phẩm');
            console.log('2.Thêm sản phẩm mới');
            console.log('3.Chỉnh sửa sản phẩm');
            console.log('4.Xoá sản phẩm');
            console.log('5.Tìm kiếm một sản phẩm');
            console.log('0.Thoát');
            choice = +rl.question('Mời nhập lựa chọn:  ');
            switch (choice) {
                case 1: {
                    this.showAllProduct();
                    break;
                }
                case 2: {
                    this.showCreateProduct();
                    break;
                }
                case 3: {
                    this.updateProduct();
                    break;
                }
                case 4: {
                    this.deleteProduct();
                    break;
                }
                case 5: {
                    this.findOneProduct();
                    break;
                }
            }
        } while (choice != 0);
    }
    showAllProduct() {
        console.log('-------Danh sách sản phẩm--------');
        let products = this.productmanagement.getAllProducts();
        if (products.length == 0) {
            console.log(' ---Hiện tại chưa có sản phẩm nào---- ');
        }
        else {
            for (let i = 0; i < products.length; i++) {
                console.log(`ID :${products[i].id},Tên sản phẩm: ${products[i].name}\t Loại:${products[i].type}\t Giá:${products[i].price}\t Số lượng : ${products[i].amount}\t Miêu tả:${products[i].describe}\t Ngày tạo: ${products[i].datecreat} `);
            }
        }
    }
    addProduct() {
        let name = '';
        do {
            name = rl.question(' Nhập tên sản phẩm: ');
            if (this.productmanagement.findProductByName(name)) {
                console.log(' ---Tên sản phẩm bị trùng----');
            }
        } while (this.productmanagement.findProductByName(name));
        let price = -1;
        do {
            price = +rl.question('Nhập giá sản phẩm: ');
            if (price <= 0) {
                console.log("----Giá trị nhập vào không đúng----");
            }
        } while (price <= 0);
        let amount = -1;
        do {
            amount = +rl.question('Nhập số lượng: ');
            if (amount <= 0) {
                console.log("----Giá trị nhập vào không đúng---");
            }
        } while (amount <= 0);
        let describe = rl.question('Nhập mô tả sản phẩm: ');
        let datecreat = rl.question('Ngày nhập sản phẩm: ');
        return new product_1.Product(name, price, amount, describe, datecreat);
    }
    showCreateProduct() {
        console.log('------Thêm sản phẩm--------');
        let product = this.addProduct();
        this.productmanagement.creatNewProduct(product);
    }
    updateProduct() {
        console.log('------Chỉnh sửa sản phẩm------');
        let id = +rl.question('Nhập ID sản phẩm muốn sửa:  ');
        let product = this.addProduct();
        this.productmanagement.updateById(id, product);
    }
    deleteProduct() {
        console.log('------Xoá sản phẩm--------');
        let id = +rl.question('Nhập ID sản phẩm muốn xoá: ');
        let index = this.productmanagement.findById(id);
        if (index != -1) {
            this.productmanagement.removeById(id);
            console.log('-----Xoá thành công----');
        }
        else {
            console.log('----- Không tìm thấy ID sản phẩm -----');
        }
    }
    findOneProduct() {
        let name = rl.question('Nhập tên sản phẩm muốn hiển thị: ');
        let find = this.productmanagement.findProductByName(name);
        if (find != null) {
            console.log(`ID :${find.id},Tên sản phẩm: ${find.name}\t Loại:${find.type}\t Giá:${find.price}\t Số lượng : ${find.amount}\t Miêu tả:${find.describe}\t Ngày tạo: ${find.datecreat} `);
        }
        else {
            console.log("------Không tìm thấy sản phẩm-----");
        }
    }
}
exports.Menu = Menu;
