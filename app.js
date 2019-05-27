const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/routes.js');
const dotenv = require('dotenv');
const morgan = require('morgan');
var winston = require('./winston');

app.use(routes);

dotenv.config();

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: winston.stream })); 

 

 
//app.listen(process.env.PORTS, () => console.log(`Example app listening on port ${process.env.PORTS}`))
 
 app.listen(process.env.PORT);
module.exports = app;