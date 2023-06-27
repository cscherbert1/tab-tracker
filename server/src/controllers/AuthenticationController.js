module.exports = {
    register (req, res) {
        res.send({
            message: `Email registered: ${req.body.email}. Have fun!`
        })
    }
}