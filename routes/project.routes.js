// routes/project.routes.js

const router = require("express").Router();

// const mongoose = require('mongoose');

const Project = require("../models/Project.model");
// const Task = require('../models/Task.model');

//  POST  -  Creates a new project
router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;

  // another way to do above would be to create a new project
  // const newProject = {
  // title,
  // description,
  // tasks: [] }
  // Project.create(newProject)

  Project.create({ title, description, tasks: [] })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("error creating a new project", err);
      res.status(500).json({
        message: "Error creating project",
        error: err,
      });
    });
});

module.exports = router;
