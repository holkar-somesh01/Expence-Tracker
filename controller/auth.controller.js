const User = require("./../model/User")
const bcrypt = require("bcrypt")

exports.registerUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash })
        res.json({ message: "Register Success" })
    } catch (error) {
        res.status(400).json({ message: "Resource Not Fount", error: error.message })
    }
}
exports.loginUsers = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(404).json({ message: "Email Not Found" })
        }
        console.log(result);
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(404).json({ message: "Password Not Found" })
        }
        res.json({ message: "Login Success", result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Resource Not Fount", error: error.message })
    }
}