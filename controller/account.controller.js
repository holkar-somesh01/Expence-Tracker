const asyncHandler = require("express-async-handler")
const Account = require("../model/Account")

exports.getAccountDetails = asyncHandler(async (re, res) => {
    const result = await Account.find()
    res.json({ message: "Account Deatil Fetch Success", result })
})
exports.credit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "credit" })
    res.json({ message: "Account Credit Success" })
})
exports.debit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "debit" })
    res.json({ message: "Account debit Success" })
})