const Discord = require('discord.js');
fs = require('fs');

var args = process.argv.slice(2);
if(args.length == 0) {
    return;
}
var directory = args[0];

const hook = new Discord.WebhookClient('ID', 'TOKEN');
fs.readFile(directory, 'utf8', function (err,data) {
    hook.send(data);
});