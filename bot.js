const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.login(config.token);

//Logs to the console when the bot turns on and has set a game
bot.on('ready', () => {
	bot.user.setGame('beta v0.0000001');
	console.log(`Ready! Currently located in ${client.guilds.size} servers!`);
});

//Logs to the console when the bot joins a server
bot.on('guildCreate', guild => {
	console.log(`Joined server: ${guild.name} (id: ${guild.id}). This server currently has ${guild.memberCount} members!`);
});

//Logs to the console when the bot leaves a server
bot.on('guildDelete', guild => {
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

//Commands
bot.on('message', (msg) => {

	//Exit and stop if no prefix is found or if another bot says it
	if (!msg.content.indexOf(config.prefix) || msg.author.bot) return;

	if (msg.content.indexOf(config.prefix + '<3')) {
		msg.channel.send(':heart::heart::heart:');
	} else if (msg.content.indexOf(config.prefix + 'help')) {
		msg.channel.send('uhhhhhhhhh...');
	} else if (msg.content.indexOf(config.prefix + 'ping')) {
		msg.channel.send(`Pong! Ping = \`${Math.round(bot.ping)}\` ms`)
	}

	//Bot author only commands
	if (msg.author.id !== config.ownerID) return msg.reply('lol nope');

	if (msg.content.indexOf(config.prefix + "bee")) {
		msg.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small to get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
		msg.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
		msg.channel.send("Barry! Breakfast is ready!")
		msg.channel.send("Coming! Hang on a second. Hello?")
	}
});