const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const router = express.Router();
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

router.post('/', (req, res) => {	
	bot.sendPhoto(process.env.BOT_ID, new Buffer(req.body.dataURL, 'base64'));
	res.status(200).send('Ok');
});

bot.on('message', (msg) => {
  let chatId = msg.chat.id;    
  bot.sendMessage(chatId, "Received your message, here it is: " + chatId);
});

module.exports = router;
