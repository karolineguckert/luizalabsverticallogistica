import Purchase from "../entity/Purchase";

class PurchaseRepository {

    public async getPurchase (code: number) {
        return Purchase.find({code: code}).exec();
    }

    public async getAllPurchases () {
        return Purchase.find().exec();
    }

    public async createPurchase (name: string, image: string, code: number) {

        return null;
    }

}
export default PurchaseRepository;