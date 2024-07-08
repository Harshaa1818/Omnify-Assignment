import { Router } from "express";
import { homepage, login, register, friendList } from "../controllers/user.controller.js";


const router = Router();

router.route('/userHomePage',homepage)
router.route('/login',login)
router.route('/register',register)
router.route('/friendList',friendList)


export default router;