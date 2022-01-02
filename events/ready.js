//export module for discord.js ready event
module.exports = (client) => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity(`${client.guilds.cache.size} servers | ${client.user.username}`);
};