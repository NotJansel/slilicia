//module export messageCreate Event
module.exports = (client, message) => {
    //get prefiv from the env file
    const prefix = process.env.PREFIX;
    //check if the message starts with the prefix
    if (!message.content.startsWith(prefix)) return;
    //get the command and the args
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    //check if the command exists
    if (!client.commands.has(commandName)) return;
    //get the command
    const command = client.commands.get(commandName);
    //check if the command has args
    if (command.args && !args.length) {
        //send the usage
        let reply = `You didn't provide any arguments, ${message.author}!`;
        //send embed with usage
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }  
        message.channel.send(reply);
        return;
    }
};

    
