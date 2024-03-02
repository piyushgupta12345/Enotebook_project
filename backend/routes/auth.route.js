import express from 'express';
import { register, login, getUser } from '../controllers/auth.controller.js';
import fetchUser from "../middlewares/fetchUser.middleware.js"
const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/getuser', fetchUser, getUser);



export default router;