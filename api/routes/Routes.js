const express = require("express");
const router  = express.Router();
const Controller = require('../controllers/Controller')

router.get('/api', Controller.listAllRestaurants)


module.exports = router;