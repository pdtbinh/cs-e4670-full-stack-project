/*=================
IMPORT DEPENDENCIES
==================*/
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

/*===================
ROUTE INNER FUNCTIONS
====================*/
const getAllUsers = async (request, response) => {
    const users = await User
        .find({})
        .populate('blogs', { title: 1, description: 1 })
    response.status(200).json(users)
}

const addNewUser = async (request, response) => {
    const { username, password, name } = request.body
    // Handle error cases
    if (!(username && password && name))
        response.status(400).json(
            { error: 'Missing username or password or name.' }
        )
    if (username.length < 3 || password.length < 3)
        response.status(400).json(
            { error: 'Username and password must have at least 3 characters.'}
        )
    // Hash password, create, and return new user
    const salt = 10
    const passwordHashed = await bcrypt.hash(password, salt)
    const user = new User({ username, passwordHashed, name })
    const savedUser = await user.save()
    response.status(200).json(savedUser)
}

/*===========
HANDLE ROUTES
============*/
usersRouter
    .route('/')
    .get(getAllUsers)
    .post(addNewUser)

/*===========
EXPORT ROUTER
============*/
module.exports = usersRouter
