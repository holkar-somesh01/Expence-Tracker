exports.logger = (req, res, next) => {
    console.log("logged")
    next()
}