const express = require('express');
const config = require('./config/config');
const routes = require('./routes');
const botController = require('./controllers/botController');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

setInterval(() => {
  botController.sendReminderMessage();
}, config.messageInterval);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
