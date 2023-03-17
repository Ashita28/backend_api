import mongoose from 'mongoose';
const { Schema } = mongoose

const FriendSchema = new Schema(
    {
        status: String,
        friend_id: mongoose.Schema.Types.ObjectId
    }
)

const Friend = mongoose.model('Friend', FriendSchema)
export default Friend;