const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        authType: {
            type: String,
            enum: ["Admin", "Customer", "Chef", "Waiter"],
            default: "Customer"
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            default: ""

        },
        email: {
            type: String,
        },
        phone: {
            type: Number,
        },
        password: {
            type: String,
        }


    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);
module.exports = User;