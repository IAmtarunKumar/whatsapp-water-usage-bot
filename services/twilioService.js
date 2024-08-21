const twilio = require('twilio');
const config = require('../config/config');

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

const sendMessage = async (to, body) => {
  return client.messages.create({
    body,
    from: config.twilio.phoneNumber,
    to,
  });
};

module.exports = {
  sendMessage,
};
