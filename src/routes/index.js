const express = require('express');

const studentControllers = require('../controllers');

const studentRouter = express.Router();

studentRouter.post('/students', studentControllers.createStudent);

module.exports = studentRouter;