const router = require("express").Router();
// const mongoose = require('mongoose');

const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

//  Create a new task
router.post('/tasks', (req, res, next) => {
    const { title, description, projectId } = req.body;

    const newTask = { 
        title, 
        description, 
        project: projectId 
    }
    
    Task.create(newTask)
    
        .then(taskFromDB => {
            console.log(newTask.projectId)
            return Project.findByIdAndUpdate(projectId, { $push: { tasks: taskFromDB._id } } );
        })
        .then( response => {
            
            res.status(201).json(response)
        })
        .catch(err => res.json(err));
});

module.exports = router;