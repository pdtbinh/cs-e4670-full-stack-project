/*=================
IMPORT DEPENDENCIES
==================*/
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const authRouter = require('./controllers/auth')
const projectsRouter = require('./controllers/project')
const usersRouter = require('./controllers/user')
const env = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

/*=================
CONNECT TO MONGO DB
==================*/
const url = env.MONGODB_URI
mongoose.set('strictQuery',false)
mongoose
    .connect(url)
    .then(() => logger.info('Connected to MongoDB'))
    .catch(error => logger.error('Failed to connect to MongoDB: ', error.message))

/*====================
BACKEND CONFIGURATIONS
=====================*/
app.use(cors())
app.use(express.json())
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :req[content-length] - :response-time ms :body'))

/*====================
PRE-ROUTING MIDDLEWARE
=====================*/
app.use(middleware.extractToken)

/*============
ALL API ROUTES
=============*/
app.use('/api/projects', middleware.extractUser, projectsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
if (process.env.NODE_ENV === 'test') {
    //const testingRouter = require('./controllers/testing')
    //app.use('/api/testing', testingRouter)
}
app.use('*', (req, res) => res.send('404: Backend route not found.'))

/*=====================
POST-ROUTING MIDDLEWARE
======================*/
app.use(middleware.errorHandler)

/*=====
EXPORTS
======*/
module.exports = app