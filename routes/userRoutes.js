import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/user', fetchuser, userController.getUser)
router.post('/login', userController.login)
router.post('/register', userController.register)

export default router;