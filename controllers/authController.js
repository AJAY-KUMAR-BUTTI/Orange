const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signup = async(req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        if(password != confirmPassword) {
            res.status(400).send({status : 'error', msg : 'password/confirmPassword are not the same'})
        } else {
            const hashPassword = await bcrypt.hash(password, 5);
            const newUser = await userModel.create({ name, email, password : hashPassword });
            res.send({status : 'success', user : newUser})
        }
        
    } catch(err) {
        console.log(err)
        res.status(500).send({status : 'Error', err})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const user = await userModel.findOne({ email });
        if(!user) {
            res.status(401).send({status : 'Error', msg : 'Invalid user'});
        } else {
            const match = await bcrypt.compare(password, user.password);
            if(!match) {
                res.status(401).send({status : 'Error', msg : 'Invalid password'});
            }
            // generate token;
            const userPayload = { name : user.name, email : user.email };
            const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, { algorithm : 'HS384', expiresIn : '1d'});
            res.cookie('jwt', token);
            console.log(token)
            res.send({ status : 'success', user, token});
        }
    } catch (error) {
        res.status(500).send({status : 'Error', err : error});
    }
}

const logout = async(req, res) => {
    res.cookie('jwt', '', {maxAge : 1});
    res.send({status : 'success', msg : 'loggedOut successfully'});
}

module.exports = {
    signup, 
    login,
    logout
}