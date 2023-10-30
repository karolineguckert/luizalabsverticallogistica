import Order from "./Order";
import order from "./Order";

class Purchase {
    private user_id: number;
    private name: string;
    private orders: Order[];

    constructor(user_id: number, name: string) {
        this.user_id = user_id;
        this.name = name;
        this.orders = [];
    }

    public addOrder(order_id: number, total: number, date: string){
        const order: Order = new Order(order_id, total, date);
        this.orders.push(order);
    }
}
export default Purchase;