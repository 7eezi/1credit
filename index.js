const Discord = require('discord.js');
const bot = new Discord.Client();

const token ='NjExODk4MjEwMzE0NzQ3OTE0.XV2_zA.f9xBxUe2ew41DBWag0yngImo8M8';


bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in ${bot.user.tag}.
    - All Codes Working
    
    `)
});


bot.on('message', message => {
    if(message.content === '1day') {
        message.channel.send('#daily')
    }
    });



    
bot.on('message', message => {
    if(message.content === '1cred') {
        message.channel.send('#credit')
    }
    });




bot.login(token)