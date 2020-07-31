const Discord = require("discord.js");

module.exports = {
	name: 'comandos',
	description: 'Comandos',
	nsfw: false,
	execute(client, message, args) {
		const embed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle("Comandos")
		.addFields(
			{ name: 'Olá!', value: 'Sou um bot criado para a sua diversão =)' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Interação', value: '!comandos\n!ping', inline: true },
			{ name: 'NSFW 🔞', value: '!mama\n!pézinho\n!yuri\n!boobs\n!lesbian\n!futanari\n!trap', inline: true },
			{ name: '\u200B', value: '\u200B' },
		)
		.setThumbnail('https://cdn.discordapp.com/attachments/731292741299863623/733518431462096946/Sem_Titulo-2.jpg')
		.setFooter(`${message.member.user.tag}` + ' ・ ' + `${message.createdAt.getDate()}` + "/" + `${message.createdAt.getMonth() + 1}` + "/" + `${message.createdAt.getFullYear()}` , `${message.author.avatarURL()}`);
		
		message.channel.send(embed);
	},
};

