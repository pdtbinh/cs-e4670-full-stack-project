/*=================
IMPORT DEPENDENCIES
==================*/
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authRouter = require('express').Router()
const User = require('../models/user')

/*===================
ROUTE INNER FUNCTIONS
====================*/
const login =  async (request, response) => {
    const { username, password } = request.body
    const user = await User.findOne({ username })
    const passwordCorrect = user && await bcrypt.compare(password, user.passwordHashed)

    if (!passwordCorrect) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(
        userForToken, 
        process.env.SECRET,
        { expiresIn: '30d' } //Token expires after 30 days
    )

    response.status(200).send(
        { token, username: user.username, name: user.name }
    )
}

/*===========
HANDLE ROUTES
============*/
authRouter
    .route('/login')
    .post(login)

authRouter
    .route('/logout')
    .delete()

/*===========
EXPORT ROUTER
============*/
module.exports = authRouter