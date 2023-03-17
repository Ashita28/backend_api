import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import likeController from '../controllers/likeController.js';

const router = express.Router();

router.post('/like/:id', fetchuser, likeController.addLike)
router.delete('/like/:id', fetchuser, likeController.deleteLike)

export default router;