import mongoose from 'mongoose';
const { Schema } = mongoose
const PostsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    posts: {
        type: [{ type:Object , ref: 'Post' }],
        default: []
    }
})

const Posts = mongoose.model('Posts', PostsSchema)
export default Posts;