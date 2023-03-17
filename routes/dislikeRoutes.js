import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import dislikeController from '../controllers/dislikeController.js';


const router = express.Router();

router.post('/dislike/:id', fetchuser, dislikeController.addDislike)
router.delete('/dislike/:id', fetchuser, dislikeController.deleteDislike)

export default router;