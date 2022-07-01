"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    getAllProducts() {
        return ProductManagement.Products;
    }
    findProductByName(name) {
        for (let i = 0; i < ProductManagement.Products.length; i++) {
            if (ProductManagement.Products[i].name == name) {
                return ProductManagement.Products[i];
                break;
            }
        }
        return null;
    }
    creatNewProduct(t) {
        ProductManagement.id++;
        t.id = ProductManagement.id;
        ProductManagement.Products.push(t);
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            ProductManagement.Products[index] = t;
            t.id = id;
        }
        else {
            console.log("khong tim thay san pham");
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index != -1) {
            ProductManagement.Products.splice(index, 1);
        }
        else {
            console.log(" khong co san pham nao");
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < ProductManagement.Products.length; i++) {
            if (ProductManagement.Products[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.Products = [];
ProductManagement.id = 0;
ProductManagement.type = "choice available";
