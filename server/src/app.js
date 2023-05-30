const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

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

app.listen(process.env.PORT || 8081)
