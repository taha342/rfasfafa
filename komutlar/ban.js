const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  message.delete();
  let sebep = args.slice(1).join(" ");
  let frenzy_code = message.mentions.users.first();
if(!sebep && !frenzy_code) return message.reply('**Bir Kullanıcı Belirtmelisin Ve Birde Sebeb Yazmalısın!**')
  message.guild.ban(frenzy_code, sebep);
};
exports.conf = {
  enabled:true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};
exports.help = {
  name: "ban",
  description: "Herhangi bir kullanıcıyı banlarsınız.",
  usage: "ban kullanıcı sebep"
};
//Lord Creative