import express from 'express';
import {
    deleteUserHandler,
    getMeHandler,
    getUserHandler,
    getUsersHandler,
    updateUserHandler
} from '../controllers/user.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();


// Get currently logged in user
router.get('/me',  deserializeUser, requireUser, getMeHandler);
router.get('/', getUsersHandler);
router.get('/:userId',  deserializeUser, requireUser, getUserHandler);
router.patch('/:userId',  deserializeUser, requireUser,updateUserHandler);
router.delete('/:userId', deserializeUser, requireUser, deleteUserHandler);

export default router;
