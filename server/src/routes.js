const AuthenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
    app.post('/register', 
        AuthenticationController.register
    )
    // app.get('/smoke', (req, res) => {
    //     res.send({
    //         message: 'tab-tracker server is running'
    //     })
    // })
    
}
