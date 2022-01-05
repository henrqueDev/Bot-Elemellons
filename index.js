const bot = require('./src/app.js');

require('dotenv').config()
bot.start(process.env.BOT_LOGIN);