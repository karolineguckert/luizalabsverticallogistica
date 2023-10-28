import {model, Schema, Types} from 'mongoose';
import Decimal128 = module
import * as module from "module";

interface Purchase {
    userId: Number;
    userName: String;
    orderId: Number;
    productId: Number;
    value: Decimal128;
    date: Number;
}

const purchaseSchema = new Schema<Purchase>({
    userId: { type: Number, required: true, size: 10 },
    userName: { type: String, required: true, size: 45 },
    orderId: { type: Number, required: true, size: 10 },
    productId: { type: Number, required: true, size: 10 },
    value: { type: Decimal128, required: true, size: 12 },
    date: { type: Number, required: true, size: 8 }
});

const Purchase = model('purchase', purchaseSchema);
export default Purchase;
