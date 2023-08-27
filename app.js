/*=================
IMPORT DEPENDENCIES
==================*/
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
//const blogsRouter = require('./controllers/blogs')
//const usersRouter = require('./controllers/user')
const env = require('./utils/config')
const logger = require('./utils/logger')
//const middleware = require('./utils/middleware')
//const loginRouter = require('./controllers/login')

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

/*====================
PRE-ROUTING MIDDLEWARE
=====================*/
//app.use(middleware.tokenExtractor)

/*============
ALL API ROUTES
=============*/
app.use('/', (req, res) => res.send('Hello'))
//app.use('/api/blogs', middleware.userExtractor, blogsRouter)
//app.use('/api/users', usersRouter)
//app.use('/api/login', loginRouter)
if (process.env.NODE_ENV === 'test') {
  //const testingRouter = require('./controllers/testing')
  //app.use('/api/testing', testingRouter)
}

/*=====================
POST-ROUTING MIDDLEWARE
======================*/
//app.use(middleware.errorHandler)

/*=====
EXPORTS
======*/
module.exports = app