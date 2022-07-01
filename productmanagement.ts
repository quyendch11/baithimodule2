import { Product } from "./product";

export class ProductManagement{
    private static Products: Product[]=[];
    private static id : number = 0;
    private static type : string = "choice available";

    getAllProducts(): Product[] {
        return ProductManagement.Products
    }

    findProductByName(name: string): Product |null{
        for (let i = 0; i < ProductManagement.Products.length;i++){
            if(ProductManagement.Products[i].name == name){
                return ProductManagement.Products[i];
                break;
            }
        }
        return null;
    }
    creatNewProduct(t:Product):void{
        ProductManagement.id++;
        t.id = ProductManagement.id;
        ProductManagement.Products.push(t);
    }

    
    updateById(id: number, t: Product): void{
        let index = this.findById(id);
        if(index != -1){
            ProductManagement.Products[index] = t;
            t.id = id;
        }else{
            console.log("khong tim thay san pham")
        }

    }

    removeById(id: number): void{
        let index = this.findById(id);
        if(index != -1){
            ProductManagement.Products.splice(index, 1);
        } else{
            console.log(" khong co san pham nao")
        }

    }

    findById(id: number): number{
        let index = -1;
        for(let i = 0; i < ProductManagement.Products.length; i++) {
            if(ProductManagement.Products[i].id==id) {
                index = i;
                break;
            }
        }
        return index;
    }
}