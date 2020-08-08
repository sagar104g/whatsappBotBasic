const config = require('../config/config')
const logger = require('../logger/appLogger')(__filename);
const client = require('twilio')(config.accountSid, config.authToken);

var sendMessage = async(sender, reciver, message) => {
  await client.messages
      .create({
         from: `whatsapp:+1${sender}`,
         body: message,
         to: `whatsapp:+91${reciver}`,
         mediaUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
       })
      .then(message => 
        logger.info(message.sid)
      )
      .catch(err =>
        logger.error(err)
      );
}
module.exports.sendMessage = sendMessage;

