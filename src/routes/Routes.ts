import {RequestQuery, ResponseToolkit} from "@hapi/hapi";
import PurchaseController from "../controller/PurchaseController";

class Routes {
    private purchaseController: PurchaseController = new PurchaseController();

    public getPurchaseRoutes(rootPath: string) {

        return [
            {
                method: 'GET',
                path: `/${rootPath}/`,
                handler: async (request: RequestQuery, h: ResponseToolkit) => {
                    return this.purchaseController.getAllPurchases();
                },

            },
            {
                method: 'POST',
                path: `/${rootPath}/`,
                handler: async (request: RequestQuery, h: ResponseToolkit) => {
                    return this.purchaseController.createPurchases(request.params.code);
                },
            }
        ];
    }
}

export default Routes;