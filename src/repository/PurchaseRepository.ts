import Purchase from "../entity/Purchase";

class PurchaseRepository {

    public async getPurchase (code: number) {
        return Purchase.find({code: code}).exec();
    }

    public async getAllPurchases () {
        return Purchase.find().exec();
    }

    public async createPurchase (userId: number,
                                 userName: string,
                                 orderId: number,
                                 productId: number,
                                 value: number,
                                 date: number) {

        return Purchase.create({
            userId: userId,
            userName: userName,
            orderId: orderId,
            productId: productId,
            value: value,
            date: date
        });
    }

}
export default PurchaseRepository;