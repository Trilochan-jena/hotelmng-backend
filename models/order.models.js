const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
    {
        tableNumber: {
            type: Schema.Types.ObjectId,
            ref: "Project",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "Project",
        },
        food: {
            type: Schema.Types.ObjectId,
            ref: "Project",
        }
    },
    {
        timestamps: true,
    }
);

const Order = model("order", orderSchema);
module.exports = Order;