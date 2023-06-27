const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(), 
            password: Joi.string().regex(
                new RegExp('^a-zA-Z0-9]{8,32}$')
            )
        })

        // const {error, value} = Joi.validate(req.body, schema)
        const validation = schema.validate(req.body);

        if (validation.error) {
            switch (validation.error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must send a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to mastch the following rules:
                        <br>
                        1. It must contain the following characters: lower case, upper case, numerics.
                        <br>
                        2. It must be at least than 8 characters in length
                        <br>
                        3. It must be less than 32 characters in length`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }        
    }
}