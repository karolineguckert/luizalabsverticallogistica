import Product from "./Product";
import product from "./Product";

class Order {
    private order_id: number;
    private total: number;
    private date: string;
    private products: Product[];

    constructor(order_id: number, total: number, date: string) {
        this.order_id = order_id;
        this.total = total;
        this.date = date;
        this.products = [];
    }

    public addProduct(product_id: number, value: number){
        //TODO: Colocar o calcUlo do total
        const product: Product = new Product(product_id, value);
        this.products.push(product);
    }
}
export default Order;