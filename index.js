//import discord.js
const Discord = require('discord.js');
//import dotenv
const dotenv = require('dotenv');
//import fs
const fs = require('fs');
//import path
const path = require('path');
//create a new client
const client = new Discord.Client();
//get commands from the command directory
const commands = fs.readdirSync(path.join(__dirname, 'commands'));
//get events from the events directory
const events = fs.readdirSync(path.join(__dirname, 'events'));
//load the .env file
dotenv.config();
//load the commands
for (const file of commands) {
    const command = require(path.join(__dirname, 'commands', file));
    client.commands.set(command.name, command);
}
//load the events
for (const file of events) {
    const event = require(path.join(__dirname, 'events', file));
    client.on(file.split('.')[0], event.bind(null, client));
}
//login to the bot
client.login(process.env.TOKEN);