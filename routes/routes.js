const express = require('express');

/* Call all controllers which will be use in routes */

const getdata = require('../controllers/getrequest.js');


const router = express.Router();


router.get('/',getdata.getdata);



module.exports = router;


