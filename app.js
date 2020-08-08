const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const logger = require('./logger/appLogger')(__filename);
const config = require('./config/config');
const initRoutes = require('./routes');
const app = express();
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
require('./logger/httpLogger')(app);
initRoutes(app);

app.get('/status', (req, res) => {
  res.status(HttpStatus.OK).json({msg:"alive"});
});
app.listen(config.PORT, function(err, res){
  if(err){
    logger.error("server not starting", err);
    process.exit(1);
  }else{
    logger.info("server started sucessfully");
  }
});