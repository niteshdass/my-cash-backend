const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        task: {
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
        time: {
            type: Number,
            trim: true,
            required: true,
        },
        should_done_this_job: {
            type: String,
            trim: true,
            required: true
        },
        status: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Todo", budgetSchema);