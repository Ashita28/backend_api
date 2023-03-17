import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { commentRoutes,
    dislikeRoutes,
    friendRoutes,
    likeRoutes,
    postRoutes,
    userRoutes } from './routes/index.js'

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<center><h1>Welcome to Social Media Backend</h1></center>')
})

app.use('/api/authenticate', userRoutes)

app.use('/api/user', userRoutes)

app.use('/api/posts/', postRoutes)

app.use('/api/posts/{id}', postRoutes)

app.use('/api/all_posts', postRoutes)

app.use('/api/like/{id}', likeRoutes)

app.use('/api/unlike/{id}', dislikeRoutes)

app.use('/api/comment/{id}', commentRoutes)

app.use('/api/follow/{id}', friendRoutes)

app.use('/api/unfollow/{id}', friendRoutes)


const PORT = process.env.PORT || 9000;   

const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    app.listen(PORT, () => console.log(`MongoDB connected!
    Backend Port: ${PORT} http://localhost:3000`));

}).catch((error) => console.log(`${error} did not connect`));