const HttpStatus = require('http-status-codes');
var logger = require('../logger/appLogger');
var config = require('../config/config');
var twillio = require('../services/twillio');

var sendMessage = async(req, res) => {
  try{
    const {sender, reciver, message} = req.body;
    if(sender && reciver && message){
      await twillio.sendMessage(sender, reciver, message);
      res.status(HttpStatus.OK).json({msg: "message sent sucessfully"})
    }else{
      res.status(HttpStatus.BAD_REQUEST).json({msg: "please send valid params"})
    }
  }catch(err){
    res.status(HttpStatus.METHOD_FAILURE).json({msg: "fail to resolve request"})
  }

}
module.exports.sendMessage = sendMessage;

var reciveMessage = async(req, res) => {
  try{
    const messageBody = req.body;
    let reciver = messageBody.From.split('+91')[1];
    // let media = mediaBody.MediaUrl0
    let sender = config.sender;
    let message = `hey received your message ${messageBody.Body}`;
    await twillio.sendMessage(sender, reciver, message);
    console.log(req, res);
  }catch(err){
    res.status(HttpStatus.METHOD_FAILURE).json({msg: "fail to resolve request"})
  }

}
module.exports.reciveMessage = reciveMessage;