const Discord = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Ping?',
	nsfw: false,
	execute(client, message, args) {
        var ping = Date.now() - message.createdTimestamp + " ms";
        
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Pong!', '', 'https://steamcommunity.com/id/exd1337/')
        .setDescription("Seu ping - `" + `${Date.now() - message.createdTimestamp}` + " ms`")
        .setFooter(`${message.member.user.tag}` + ' ・ ' + `${message.createdAt.getDate()}` + "/" + `${message.createdAt.getMonth() + 1}` + "/" + `${message.createdAt.getFullYear()}` , `${message.author.avatarURL()}`);
            
        message.channel.send(embed);
	},
};