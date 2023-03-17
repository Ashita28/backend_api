import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import postController from '../controllers/postController.js';

const router = express.Router();

router.post('/create', fetchuser, postController.createPost)
router.put('/update/:id', fetchuser, postController.updatePost)

export default router;