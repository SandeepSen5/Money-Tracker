const express = require('express');
const router = express.Router();
const Transcaction = require('../models/transactions')
const usercontroller=require('../controllers/userControllers')

router.post('/transcation', usercontroller.addTranscation);

router.get('/amount',usercontroller.totalAmount );

router.get('/data', usercontroller.inputData );

router.get('/delete/:id', usercontroller.deleteData );

module.exports = router;