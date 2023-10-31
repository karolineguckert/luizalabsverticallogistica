import PurchaseBusiness from "../business/PurchaseBusiness";

class PurchaseController {
    private purchaseBusiness: PurchaseBusiness = new PurchaseBusiness();

  public async getPurchaseByOrderId(orderId: number){
      const purchase = await this.purchaseBusiness.getPurchaseByOrderId(orderId);
      return JSON.parse(JSON.stringify(purchase));
  }

    public async getPurchaseByDate(beginDate: number, endDate: number){
        const purchases = await this.purchaseBusiness.getPurchaseByDate(beginDate, endDate);
        return JSON.parse(JSON.stringify(purchases));
    }

  public async getAllPurchases(){
      const purchases = await this.purchaseBusiness.getAllPurchases();
      return JSON.parse(JSON.stringify(purchases));
  }

  public async createPurchases(text: string){
      const purchase = await this.purchaseBusiness.createPurchases(text);
      return JSON.stringify(purchase);
  }
}
export default PurchaseController;