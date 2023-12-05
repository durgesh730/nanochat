import express from "express";
const router = express.Router();

// middleware
import authenticate from "../middleware/authenticate.js";

import {
    ChangePassword,
    GetAllUser,
    GetPerticulerUser,
    SendPasswordLink,
    UserLogin,
    UserLogout,
    UserRegister,
    ValidUser,
    VerfiyUser
} from "../controller/user.js";

// Register
router.post('/register', UserRegister);
// Login
router.post("/login", UserLogin);
// Validate user
router.get("/validuser", authenticate, ValidUser);
// Get particular Users data 
router.get("/users/", authenticate, GetPerticulerUser);
// Get all user 
router.get('/get/all/user', GetAllUser)
// Logout
router.get("/logout", authenticate, UserLogout);

// Send Email Link for Reset Password 
router.post("/sendpasswordlink", SendPasswordLink)

//verify user for forgot password time

router.get("/forgotpassword/:id/:token", VerfiyUser)

// change password 
router.post("/:id/:token", ChangePassword)

export default router;