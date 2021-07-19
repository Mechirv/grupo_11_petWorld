const { body } = require('express-validator');
const user = require('../models/user');

const validaciones = [
    body('user').isEmail(),
    body('pass').notEmpty()

]

module.exports = validaciones;