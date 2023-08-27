/*=================
IMPORT DEPENDENCIES
==================*/
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/*==================
DEFINE "USER" SCHEMA
===================*/
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    passwordHashed: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
})

/*=============
SCHEMA SETTINGS
==============*/
userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHashed
    }
})

/*===========
EXPORT SCHEMA
============*/
module.exports = mongoose.model('User', userSchema)