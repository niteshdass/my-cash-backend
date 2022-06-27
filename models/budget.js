const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        purpose: {
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
        budget_type: {
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
        month: {
            type: Number,
            trim: true,
            required: true
        },
        year: {
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
        note: {
            type: String,
            maxlength: 32
        },
        status: {
            type: Number,
            default: 0
        },  
    },
    { timestamps: true }
);

module.exports = mongoose.model("Budget", budgetSchema);