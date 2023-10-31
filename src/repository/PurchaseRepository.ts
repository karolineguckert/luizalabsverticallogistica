import PurchaseEntity from "../entity/PurchaseEntity";

class PurchaseRepository {

    public async getPurchaseByOrderId (orderId: number) {
        return PurchaseEntity.find({orderId: orderId}).exec();
    }

    public async getAllPurchases () {
        return PurchaseEntity.find().exec();
    }

    public async createPurchase (userId: number,
                                 userName: string,
                                 orderId: number,
                                 productId: number,
                                 value: number,
                                 date: number) {

        return PurchaseEntity.create({
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