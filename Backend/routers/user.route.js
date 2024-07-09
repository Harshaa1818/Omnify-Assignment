import { Router } from "express";
import { homepage, login, register, friendList } from "../controllers/user.controller.js";
import verifyJWT  from "../auth.js";


const router = Router();

//router.route('/userHomePage').get(verifyJWT,homepage)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/friendList').get(verifyJWT,friendList)


export default router;