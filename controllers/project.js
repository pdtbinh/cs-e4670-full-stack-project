/*=================
IMPORT DEPENDENCIES
==================*/
const projectsRouter = require('express').Router()
const Project = require('../models/project')
require('express-async-errors')

/*===================
ROUTE INNER FUNCTIONS
====================*/
const getAllProjects = async (request, response) => {
    const projects = await Project
        .find({})
        .populate('user', { username: 1, name: 1 })
    response.status(200).json(projects)
}

const addNewProject = async (request, response) => {
    if (!request.user) {
        return response.status(401).json({ error: 'User token invalid.' })
    }
    // Create project
    const user = request.user
    const { title, description } = request.body
    const project = new Project({ title, description, user: user._id })
    let savedProject = await project.save()
    savedProject = await Project
        .findById(savedProject._id)
        .populate('user', { username: 1, name: 1 })

    // Add project to user.projects
    user.projects = user.projects.concat(savedProject._id)
    user.save()

    // Respond
    response.status(201).json(savedProject)
}

const deleteProject = async (request, response) => {
    if (!request.user) {
        return response.status(401).json({ error: 'User token invalid.' })
    }
    // Find the project
    const user = request.user
    const project = await Project
        .findById(request.params.id)
        .populate('user', { username: 1, name: 1 })

    // Check if the logged in user is the user who created this project (authorization)
    if (project.user._id.toString() !== user._id.toString()) {
        return response.status(401).json({ error: 'Unauthorized request.' })
    }

    // Delete the project
    const deletedProject = await Project.findByIdAndRemove(request.params.id)
    if (deletedProject)
        response.status(204).end()
    else
        response.status(404).end()
}

const editProject = async (request, response) => {
    // Find the project
    const user = request.user
    const project = await Project
        .findById(request.params.id)
        .populate('user', { username: 1, name: 1 })

    // Check if the logged in user is the user who created this project (authorization)
    if (project.user._id.toString() !== user._id.toString()) {
        return response.status(401).json({ error: 'Unauthorized request.' })
    }

    // Update the project
    const { title, description } = request.body
    const newProject = { title, description, user: user._id }
    const updatedProject = await Project
        .findByIdAndUpdate(request.params.id, newProject, { new: true })
        .populate('user', { username: 1, name: 1 })
    if (updatedProject)
        response.status(200).json(updatedProject)
    else
        response.status(404).end()
}

/*===========
HANDLE ROUTES
============*/
projectsRouter
    .route('/')
    .get(getAllProjects)
    .post(addNewProject)

projectsRouter
    .route('/:id')
    .delete(deleteProject)
    .put(editProject)

/*===========
EXPORT ROUTER
============*/
module.exports = projectsRouter