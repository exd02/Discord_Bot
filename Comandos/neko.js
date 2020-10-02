const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

/*
	If you wanna use NSFW make sure you're 18+ and set the flag "nsfw:true".
	Acess the nekos.life api -> https://www.npmjs.com/package/nekos.life
*/
module.exports = {
	name: 'neko',
	description: 'Random neko image!',
	nsfw: true,
	execute(client, message, args) {
		neko.sfw.neko().then(neko => {
			console.log(`[REQUEST] ${neko.url}`);
			const embed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle("Neko")
			.setImage(`${neko.url}`)
			.setFooter(`${message.member.user.tag}` + ' ・ ' + `${message.createdAt.getDate()}` + "/" + `${message.createdAt.getMonth() + 1}` + "/" + `${message.createdAt.getFullYear()}` , `${message.author.avatarURL()}`);
				
			message.channel.send(embed);
		});
	},
};
