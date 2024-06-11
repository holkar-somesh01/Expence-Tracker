const router = require("express").Router()
const accountController = require("../controller/account.controller")

router
    .get("/fetch", accountController.getAccountDetails)
    .post("/credit", accountController.credit)
    .post("/debit", accountController.debit)

module.exports = router