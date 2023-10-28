import PurchaseBusiness from "../business/PurchaseBusiness";

class PurchaseController {
    private purchaseBusiness: PurchaseBusiness = new PurchaseBusiness();

  public async getAllPurchases (){
      const purchase = await this.purchaseBusiness.getAllPurchases();
      return JSON.stringify(purchase);
  }

  public async createPurchases (text: string){
      const purchase = await this.purchaseBusiness.createPurchases(text);
      return JSON.stringify(purchase);
  }
}
export default PurchaseController;