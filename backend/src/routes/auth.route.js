import express from "express"
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.contoller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";


const router = express.Router();


// (req, res) => {res.send("signup route")} ye yaha space occupy karenge or handle nahi honge toh alag se function bana ker call kardo in controllers
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

export default router;