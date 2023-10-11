const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { createJWT } = require('../../helpers/auth')

async function create (req, res, next){
    try{
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    }catch(err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const pw = req.body.password;
        const email = req.body.email;

        const user = await User.findOne({email});
        if (!user) throw new Error();

        const match = await bcrypt.compare(pw, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (err) {
        res.status(400).json("Invalid Credentials");
    }
}

async function checkToken(req, res, next) {
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken
}