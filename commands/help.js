//export module with a map of commands and their description, and if the args say so the usage
module.exports = {
    name: 'help',
    description: 'Displays all commands and their description',
    args: false,
    usage: '',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Commands')
            .setDescription('All commands are case sensitive.')
            .setFooter('Made by: @NotJansel#0001 and Github Copilot');
        for (const [key, value] of client.commands) {
            embed.addField(`${key}`, `${value.description}`);
        }
        message.channel.send(embed);
    },
};