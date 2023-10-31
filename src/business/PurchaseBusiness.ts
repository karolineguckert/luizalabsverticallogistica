import PurchaseRepository from "../repository/PurchaseRepository";
import PurchaseEntity from "../entity/PurchaseEntity";
import Purchase from "../Purchase";
import Purchases from "../Purchases";

class PurchaseBusiness {
    private purchaseRepository: PurchaseRepository;

    constructor() {
        this.purchaseRepository = new PurchaseRepository();
    }

    public async getAllPurchases (){
        const purchasesFromEntity : PurchaseEntity[] = await this.purchaseRepository.getAllPurchases();

        if(purchasesFromEntity.length > 0){
            let purchaseObject: Purchases = new Purchases(this.createFirstPurchase(purchasesFromEntity));

            purchasesFromEntity.map(purchaseFromEntity => {
                let purchase = purchaseObject.getPurchase(purchaseFromEntity.userId);

                if(purchase === undefined){
                    purchase = purchaseObject.addPurchase(purchaseFromEntity.userId, purchaseFromEntity.userName);
                }

                let order = purchase.getOrder(purchaseFromEntity.orderId);

                if(order === undefined){
                    order = purchase.addOrder(purchaseFromEntity.orderId, purchaseFromEntity.date);
                }

                order.addProduct(purchaseFromEntity.productId, purchaseFromEntity.value);

            })
            return purchaseObject;
        }
        return {};
    }

    public async getPurchaseByOrderId (orderId: number){
        const purchasesFromEntity : PurchaseEntity[] = await this.purchaseRepository.getPurchaseByOrderId(orderId);

        if(purchasesFromEntity.length > 0){
            let purchaseObject: Purchases = new Purchases(this.createFirstPurchase(purchasesFromEntity));

            purchasesFromEntity.map(purchaseFromEntity => {
                let purchase = purchaseObject.getPurchase(purchaseFromEntity.userId);

                if(purchase !== undefined){
                    let order = purchase.getOrder(purchaseFromEntity.orderId);

                    if(order !== undefined){
                        order.addProduct(purchaseFromEntity.productId, purchaseFromEntity.value);
                    }
                }
            })
            return purchaseObject;
        }
        return {};
    }

    public async createPurchases (text: string){
        const listOfPurchases: string[] = text.split("\n")

        listOfPurchases.map(async purchase => {

            let purchaseObject: any = { //TODO: interface ou dto ou classe
                userId: "",
                orderId: "",
                productId: "",
                userName: "",
                value: "",
                date: "",
                completePurchaseText: purchase
            }

            const userIdExpMatch = this.getExpMatchID(purchaseObject.completePurchaseText);
            purchaseObject = this.manipulatePurchaseObject("userId", purchaseObject, userIdExpMatch);

            const userNameExpMatch = this.getExpMatchUserName(purchaseObject.completePurchaseText);
            purchaseObject = this.manipulatePurchaseObject("userName", purchaseObject, userNameExpMatch);

            const orderIdExpMatch = this.getExpMatchID(purchaseObject.completePurchaseText);
            purchaseObject = this.manipulatePurchaseObject("orderId", purchaseObject, orderIdExpMatch);

            const productIdExpMatch = this.getExpMatchID(purchaseObject.completePurchaseText);
            purchaseObject = this.manipulatePurchaseObject("productId", purchaseObject, productIdExpMatch);

            purchaseObject = this.setDate(purchaseObject);
            purchaseObject = this.setValue(purchaseObject);


            if (this.isAllFieldsWithValue(purchaseObject)) {
                await this.purchaseRepository.createPurchase(
                    parseFloat(purchaseObject.userId),
                    purchaseObject.userName,
                    parseFloat(purchaseObject.orderId),
                    parseFloat(purchaseObject.productId),
                    parseFloat(purchaseObject.value.toString()),
                    parseInt(purchaseObject.date)
                );
            }
        })
        return "";
    }

    private createFirstPurchase(purchases : PurchaseEntity[]): Purchase {
        const firstPurchase: PurchaseEntity = purchases[0];
        const purchaseObject: Purchase = new Purchase(firstPurchase.userId, firstPurchase.userName);
        purchaseObject.addOrder(firstPurchase.orderId, firstPurchase.date);

        return purchaseObject;
    }

    private manipulatePurchaseObject(fieldName: string, purchaseObject: any, fieldExpMatch: RegExpMatchArray | null): any {
        if(fieldExpMatch){
            const lengthCompletePurchaseText = purchaseObject.completePurchaseText.length;
            purchaseObject[fieldName] = fieldExpMatch[0];
            purchaseObject.completePurchaseText = purchaseObject.completePurchaseText.slice(purchaseObject[fieldName].length, lengthCompletePurchaseText);
        }
        return purchaseObject;
    }

    private isAllFieldsWithValue(purchaseObject: any){
        return purchaseObject.userId.length > 0 &&
            purchaseObject.orderId.length > 0 &&
            purchaseObject.productId.length > 0 &&
            purchaseObject.userName.length > 0 &&
            purchaseObject.date.length > 0;
    }


    private getExpMatchID(auxTextPurchase: string){
        const regexID = '([0-9]){10}';
        return auxTextPurchase.match(regexID);
    }

    private getExpMatchUserName(auxTextPurchase: string){
        const regexUserName = '(\\s)+(([A-Za-z]|[\\s]|[.]|[\']){1,45})';
        return auxTextPurchase.match(regexUserName);
    }

    private setDate(purchaseObject: any){
        const lengthCompletePurchaseText = purchaseObject.completePurchaseText.length;
        const sizeOfDate = lengthCompletePurchaseText - 8;

        purchaseObject.date = purchaseObject.completePurchaseText.slice(sizeOfDate, lengthCompletePurchaseText);
        purchaseObject.completePurchaseText = purchaseObject.completePurchaseText.slice(0, sizeOfDate);

        return purchaseObject;
    }

    private setValue(purchaseObject: any){
        purchaseObject.value = purchaseObject.completePurchaseText;
        purchaseObject.completePurchaseText = '';
        return purchaseObject;
    }

}
export default PurchaseBusiness;