const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../../controllers/api/usersController');

router.get("/users",usersController.list);

router.get("/users/:id",usersController.one);

module.exports = router;