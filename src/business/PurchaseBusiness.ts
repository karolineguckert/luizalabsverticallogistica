import PurchaseRepository from "../repository/PurchaseRepository";

class PurchaseBusiness {
    private purchaseRepository: PurchaseRepository;

    constructor() {
        this.purchaseRepository = new PurchaseRepository();
    }

    public async getAllPurchases (){
        return this.purchaseRepository.getAllPurchases();
    }

    public async createPurchases (text: string){


        return "";
    }

}
export default PurchaseBusiness;