const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tableSchema = new Schema(
    {

        tableNumber: {
            type: Number,
            required: true
        },
        chairs: {
            type: Number,
            required: true
        },


    },
    {
        timestamps: true,
    }
);

const Table = model("table", tableSchema);
module.exports = Table;