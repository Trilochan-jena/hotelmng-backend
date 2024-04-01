const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodSchema = new Schema(
    {
        foodType: {
            type: String,
            enum: ["Veg", "NonVeg", "Drinks"],
            default: "Veg"
        },
        foodNames: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true,
    }
);

const Food = model("food", foodSchema);
module.exports = Food;