const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        comments: [commentSchema], // Array of comments
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
