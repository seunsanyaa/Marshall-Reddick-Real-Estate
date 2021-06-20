const express = require('express');


const router = express.Router();
const Loan = require("../models/loan");

const loantransactions = require('../api/controllers/loantransactions');




router.get('/api/loantransactions/:limit/:order',loantransactions.loantransactions);

router.post('/api/loantransactions')

module.exports = router;