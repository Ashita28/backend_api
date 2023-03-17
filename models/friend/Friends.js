import mongoose from 'mongoose'
const { Schema } = mongoose

const FriendsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    friends: {
        type: [{ type: Object, ref: 'Friend' }],
        default: []
    }
})

const Friend = mongoose.model('Friend', FriendsSchema)
export default Friend;