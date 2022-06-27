const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        desc: {
            type: String,
            maxlength: 2000
        },
        image: {
            data: Buffer,
            contentType: String
        },
        likes: [
            {type: String, unique: true}
        ],
        comments: [
            {type: Object}
        ],
        like: {
            type: Number
        },
        comment: {
            type: Number
        },
        status: {
            type: Number,
            default: 0
        },  
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);