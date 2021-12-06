const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('token');
const bot = new TelegramBot(token, { polling: true });


bot.sendMessage(187940793, "Mensaje Enviado!");

setTimeout(() => {
    process.exit(0)
}, 1000)
