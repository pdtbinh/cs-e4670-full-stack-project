/*=================
IMPORT DEPENDENCIES
==================*/
require('dotenv').config()
const app = require('./app')
const logger = require('./utils/logger')

/*============
LISTEN TO PORT
=============*/
const PORT = process.env.PORT || 3000
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`))