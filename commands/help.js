const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "help",
    aliases: ['commands', 'cmds']
}

module.exports.run = async (client, message, args) => {
    message.channel.send('This command is broken >:(')
}