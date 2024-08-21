const twilioService = require('../services/twilioService');
const spreadsheetService = require('../services/spreadsheetService');
const { formatDate } = require('../utils/dateUtils');

const handleIncomingMessage = async (req, res) => {

  // console.log("api is calling" , req.body)
  const messageBody = req.body.Body;
  const from = req.body.From;

  const currentDate = formatDate(new Date());
  spreadsheetService.saveDataToSpreadsheet(currentDate, messageBody);

  await twilioService.sendMessage(from, 'Data received and recorded!');

  res.sendStatus(200);
};

const sendReminderMessage = async () => {
  const recipient = 'whatsapp:+919289754486';
  await twilioService.sendMessage(recipient, "Please send today's Water Usage Data.");
};

module.exports = {
  handleIncomingMessage,
  sendReminderMessage,
};
