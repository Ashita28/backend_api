import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import friendController from '../controllers/friendController.js';


const router = express.Router();

router.post('/:id', fetchuser, friendController.addFriend)
router.put('/:id', fetchuser, friendController.acceptRequest)
router.delete('/:id', fetchuser, friendController.deleteFriend)

export default router;