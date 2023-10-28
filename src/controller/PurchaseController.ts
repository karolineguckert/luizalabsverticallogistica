import PurchaseBusiness from "../business/PurchaseBusiness";
import {MergeRefs, ReqRefDefaults} from "@hapi/hapi";

class PurchaseController {
    private purchaseBusiness: PurchaseBusiness = new PurchaseBusiness();

  public async getAllPurchases (){
      const purchase = await this.purchaseBusiness.getAllPurchases();
      return JSON.stringify(purchase);
  }

  public async createPurchases(text: string){
      const listOfPurchases: string[] = text.split("\n");
      console.log("aaaaaaaaa", listOfPurchases)
      const purchase = await this.purchaseBusiness.createPurchases(listOfPurchases);
      return JSON.stringify("purchase");
  }
}
export default PurchaseController;