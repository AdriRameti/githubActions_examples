const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('token');
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    console.log(chatId);
    // send back the matched "whatever" to the chat
    // bot.sendMessage(chatId, resp);
  });

bot.sendMessage(187940793, "Mensaje Enviado!");

setTimeout(() => {
    process.exit(0)
}, 1000)
