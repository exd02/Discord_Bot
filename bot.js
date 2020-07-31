console.log(`\n[Inicializando] O bot está a inicializar [...]`);

// Required Packages
const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Comandos').filter(file => file.endsWith('.js'));
console.log(`[Inicializando] Carregando todos os ${commandFiles.length} comandos [...]`);

// Display on console when the bot is ready
client.on('ready', () => {
    console.log(`[Inicializando] Bot inicializado com sucesso > ${client.user.tag} < [...]`);
    client.user.setActivity(`${config.prefix}comandos`, { type: "PLAYING"});
});

//Definindo os comandos NSFW
for (const file of commandFiles) {
    const command = require(`./Comandos/${file}`);
    client.commands.set(command.name, command);
}

// Event Listener for messages
client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.channel.type == "dm" || message.author.bot) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    console.log(`[Comando] ${command}`);
    const nsfw = require(`./Comandos/${command}.js`).nsfw;

    if(!message.channel.nsfw){
        if (nsfw){
            message.reply('Este comando é exclusivo para canais NSFW.');
            console.log(`[NSFW] Permição negada.`);
            return;
        }
    }
    
    try {
        client.commands.get(command).execute(client, message, args);
    } catch (err) {
        if (err.code == "MODULE_NOT_FOUND") return;
            console.error(err);
    }
});


// Close session
client.login(config.token);