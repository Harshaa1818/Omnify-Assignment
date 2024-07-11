import { Router } from "express";
import { homepage, login, register, getAllUsers,addFriend, logout, generateToken } from "../controllers/user.controller.js";
import verifyJWT  from "../auth.js";


const router = Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(verifyJWT,logout)
router.route('/addFriend').post(verifyJWT,addFriend)
router.route('/getAllUsers').get(getAllUsers)
router.route('/generateToken').get(generateToken)


export default router;