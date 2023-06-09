import mongoose from 'mongoose';
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    post_liked: {
        type: [{ post_id: mongoose.Schema.Types.ObjectId, liked_time: { type: Date, default: Date.now } }],
        default: []
    },
    post_disliked: {
        type: [{ post_id: mongoose.Schema.Types.ObjectId, disliked_time: { type: Date, default: Date.now } }],
        default: []
    },
    created_time: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", UserSchema);
export default User;