const express = require("express");
const router = express.Router();


const { domainController } = require('../controllers/index')


router.post('/create',domainController.createDomain)

router.post('/update' ,domainController.updateDomain)

router.post('/read', domainController.updateDomain)

module.exports = router