import PurchaseRepository from "../repository/PurchaseRepository";

class PurchaseBusiness {
    private purchaseRepository: PurchaseRepository;

    constructor() {
        this.purchaseRepository = new PurchaseRepository();
    }

    public async getAllPurchases (){
        return this.purchaseRepository.getAllPurchases();
    }

    public async createPurchases (listOfPurchases: string[]){
        listOfPurchases.map(purchase => {

            let obj = {
                userID: "",
                orderID: "",
                productID: "",
                userName: "",
                value: 0.0,
                date: "",
                completeObject: purchase
            }

            let auxTextPurchase = purchase;
            let purchaseUserID: string;
            let purchaseOrderID: string;
            let purchaseProductID: string;
            let purchaseUserName: string;

            const userID = this.getID(auxTextPurchase);
            if(userID){
                const auxPurchaseLength = auxTextPurchase.length - 1;
                purchaseUserID = userID[0];
                auxTextPurchase = auxTextPurchase.slice(purchaseUserID.length, auxPurchaseLength);
            }

            const userName = this.getUserName(auxTextPurchase);
            if(userName){
                const auxPurchaseLength = auxTextPurchase.length - 1;
                purchaseUserName = userName[0];
                auxTextPurchase = auxTextPurchase.slice(purchaseUserName.length, auxPurchaseLength)
            }

            const orderID = this.getID(auxTextPurchase);
            if(orderID){
                const auxPurchaseLength = auxTextPurchase.length - 1;
                purchaseOrderID = orderID[0];
                auxTextPurchase = auxTextPurchase.slice(purchaseOrderID.length, auxPurchaseLength);
            }

            const productID = this.getID(auxTextPurchase);
            if(productID){
                const auxPurchaseLength = auxTextPurchase.length - 1;
                purchaseProductID = productID[0];
                auxTextPurchase = auxTextPurchase.slice(purchaseProductID.length, auxPurchaseLength);
            }

            console.log("aaaaaa",auxTextPurchase)



        })
        return "";
    }

    private getID(auxTextPurchase: string){
        const regexID = '([0-9]){10}';
        return auxTextPurchase.match(regexID);
    }

    private getUserName(auxTextPurchase: string){
        const regexUserName = '([A-Za-z]|[\\s]|[.]|[\']){45}';
        return auxTextPurchase.match(regexUserName);
    }

}
export default PurchaseBusiness;