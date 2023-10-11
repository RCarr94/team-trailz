const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

module.exports = {
    createJWT
}