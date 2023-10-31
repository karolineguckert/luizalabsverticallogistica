import {Request, RequestQuery, ResponseToolkit} from "@hapi/hapi";
import PurchaseController from "../controller/PurchaseController";

class Routes {
    private purchaseController: PurchaseController = new PurchaseController();

    public getPurchaseRoutes(rootPath: string) {

        return [
            {
                method: 'GET',
                path: `/${rootPath}/orders/`,
                handler: async (request: Request, h: ResponseToolkit) => {
                    return this.purchaseController.getAllPurchases();
                },
            },
            {
                method: 'GET',
                path: `/${rootPath}/orders/{orderId}`,
                handler: async (request: Request, h: ResponseToolkit) => {
                    return this.purchaseController.getPurchaseByOrderId(request.params.orderId);
                },
            },
            {
                method: 'POST',
                path: `/${rootPath}/`,
                handler: async (request: Request, h: ResponseToolkit) => {
                    return this.purchaseController.createPurchases(request.payload.toString());
                },
            }
        ];
    }
}

export default Routes;