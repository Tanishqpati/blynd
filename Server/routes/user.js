    const express = require("express");

    const router = express.Router();

    // controller functions
    const {signupUser, loginUser} = require('../controllers/loginSignupController')

    // login route
    router.post("/login", loginUser);

    // signup
    router.post("/signup", signupUser);

    module.exports = router;
