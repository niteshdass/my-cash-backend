const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        user_id: {
            type: String,
            trim: true,
            maxlength: 32
        },
        loan_type: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        amount: {
            type: Number,
            trim: true,
            required: true
        },
        date: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        refound_date: {
            type: String,
            trim: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Loan", budgetSchema);