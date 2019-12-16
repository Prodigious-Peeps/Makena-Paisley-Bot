/*
 *	This file contains the first version of the bot script.
 *	As such, it is a work in progress and will be constantly improved.
 */

 const Discord = require('discord.js');
 const client = new Discord.Client();
 const auth = require('./auth.json');

 client.on('ready', () => {
 	console.log(`Logged in as ${client.user.tag}!`);
 });

 client.on('message', msg => {
 	if(msg.content === 'Hello') {
 		msg.reply('Hello to you too');
 	}
 });

 client.login(auth.token);