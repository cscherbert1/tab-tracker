module.exports = (app) => {
    app.get('/smoke', (req, res) => {
        res.send({
            message: 'tab-tracker server is running'
        })
    })
    
    app.post('/register', (req, res) => {
        res.send({
            message: `Email registered: ${req.body.email}. Have fun!`
        })
    })
}
