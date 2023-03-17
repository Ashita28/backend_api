import express from 'express';
import commentController from '../controllers/commentController.js';
import fetchuser from '../middleware/fetchuser.js';


const router = express.Router();

router.post('/comment/:id', fetchuser, commentController.addComment)
router.delete('/comment/:id/:comment_id', fetchuser, commentController.deleteComment)
router.put('/comment/:id/:comment_id', fetchuser, commentController.updateComment)

export default router;