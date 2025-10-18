const express = require('express')

//controller functions
const { loginUser, signupUser, Forgot, Reset, getUsers, getUser } = require('../contollers/userController')

const router = express.Router ();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// forgot password route
router.post("/forgot-password", Forgot);

// reset password route
router.post("/reset-password/:id/:token", Reset);

//attaching a handler (GET ALL users)
router.get('/ViewUsers', getUsers)

// GET a single user
router.get('/:id', getUser)


module.exports = router