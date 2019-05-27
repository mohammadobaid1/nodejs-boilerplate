
const db = require('../db/db.js'); 
const dotenv = require('dotenv');
const winston = require('../winston.js');


/* For external api calls */


const request = require('request');


dotenv.config();


const getdata = function(req,res){

var abc= 'ss';
winston.log('ss',abc);
/* call functions defined in db   */
 res.send('Hello World');

}


module.exports = {getdata}
