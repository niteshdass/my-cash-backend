const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        month: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        year: {
            type: Number,
            required: true,
            maxlength: 32
        },
        user_id: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        target_ammount: {
            type: Number,
            trim: true,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Target", budgetSchema);