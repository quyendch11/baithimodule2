export class Product {
   private _id: number=0;
   private _name: string;
   private _type: string='available';
    private _price: number;
   private _amount:number;
   private _describe:string;
   private _datecreat:string;
    constructor(name: string,price:number,amount:number,describe:string,datecreat:string){
        this._name= name;
        this._price  = price;
        this._amount = amount;
        this._describe = describe;
        this._datecreat = datecreat;
    }
    set name(value:string){
        this._name= value;
    }
    get name(){
        return this._name;
    }
    set id(value:number){
        this._id = value;
    }
    get id(){
        return this._id;
    }
    set type(value:string){
        this._type = value;
    }
    get type(){
        return this._type;
    }
    set price(value:number){
        this._price = value;
    }
    get price(){
        return this._price;
    }
    set amount(value:number){
        this._amount = value;
    }
    get amount(){
        return this._amount;
    }
    set describe(value:string){
        this._describe = value;
    }
    get describe(){
        return this._describe;
    }
    set datecreat(value:string){
        this._datecreat = value;
    }
    get datecreat(){
        return this._datecreat;
    }

}