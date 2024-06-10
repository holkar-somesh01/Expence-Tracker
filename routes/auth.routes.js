const router = require("express").Router()
const AuthController = require("../controller/auth.controller")

router
    .post("/register", AuthController.registerUsers)
    .post("/login", AuthController.loginUsers)

module.exports = router