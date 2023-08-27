/*=================
IMPORT DEPENDENCIES
==================*/
const mongoose = require('mongoose')

/*=====================
DEFINE "PROJECT" SCHEMA
======================*/
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

/*=============
SCHEMA SETTINGS
==============*/
projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

/*===========
EXPORT SCHEMA
============*/
module.exports = mongoose.model('Project', projectSchema)