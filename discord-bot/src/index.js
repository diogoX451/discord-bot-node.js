// Chama todas as Bibliotecas
const Discord =  require('discord.js');
const { Intents} = require('discord.js');
const dotenv = require('dotenv');
const config = require('../config.json');

// Define Cliente
const client = new Discord.Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(config.token);
// Resposta do codigo
client.on('ready', ()=> {
    console.log("Tudo nos conforme");
});
// Comandos
const prefix = "!";
client.on("messageCreate", (msg)=> {
    if(!msg.guild)return;
    if(!msg.content.startsWith(prefix)) return;
    
    if(msg.content == prefix + "Eai"){
        msg.reply({
            content: "Eai Zé",
        });
    }
    if(msg.content == prefix + "Bom dia"){
        msg.reply({
            content:" Opa "+ msg.author.username + " como vai cumpadre?",
        });
    }
});