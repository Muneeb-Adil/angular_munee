export class productModel{

    name:string;
    description?:string;
    price: number;
    id : number;
    constructor(product: any){
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.id = product.id;
    }
}