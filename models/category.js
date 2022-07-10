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

        slug: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
   
    },
    { timestamps: true }
);

module.exports = mongoose.model("Slug", budgetSchema);
