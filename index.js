const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { logger } = require("./middlewares/logger")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.options("*", cors())
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/account", require("./routes/account.routes"))

app.use("*", (req, res) => {
    res.status(400).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})
mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("SERVER RUNNING 🏃‍♂️"))
    console.log("MONGO CONNECTED")
})

