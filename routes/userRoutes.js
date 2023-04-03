const express = require("express");
const {register, login,userInfo} = require("../controllers/userController");

// new router object
const router = express.Router();

router.post("/login",login)
router.post("/register",register)
router.get("/user",userInfo)


// the router object is exported
module.exports = router;