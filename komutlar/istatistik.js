const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter("F O R S   'Buyur benim istatistiklerim", bot.user.avatarURL)
    .addField(
      "<a:fors37:778005711354462209> **Botun Sahibi**",
      "<@662658955230707713>| @∆ Sarkozy#0001"
    )
    .addField(
      "<a:fors37:778005711354462209>  **Geliştirici** ",
      "<@662658955230707713>"
    )
    .addField(
      "<a:fors34:778005711509913621> **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("<a:fors34:778005711509913621> **Çalışma süresi**", seksizaman)
    .addField(
      "<a:kanltik:779438002803441764> **Kullanıcılar**",
      bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField(
      "<a:kanltik:779438002803441764> **Sunucular**",
      bot.guilds.size.toLocaleString(),
      true
    )
    .addField(
      "<a:kanltik:779438002803441764> **Kanallar**",
      bot.channels.size.toLocaleString(),
      true
    )
    .addField(
      "<a:kanltik:779438002803441764> **Discord.JS sürüm**",
      "v" + Discord.version,
      true
    )
    .addField(
      "<a:kanltik:779438002803441764> **Node.JS sürüm**",
      `${process.version}`,
      true
    )
    .addField("<a:kanltik:779438002803441764> **Ping**", bot.ping + " ms", true)
    .addField(
      "<a:fors35:778005712876863548>  **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("<a:fors35:778005712876863548> **Bit**", `\`${os.arch()}\``, true)
    .addField(
      "<a:fors35:778005712876863548> **İşletim Sistemi**",
      `\`\`${os.platform()}\`\``
    )
    .addField(
      "**» Bot Davet**",
      " [Davet Et](https://discord.com/api/oauth2/authorize?client_id=780113292777095178&permissions=8&scope=bot)"
    )
    .addField(
      "**» Destek Sunucusu**",
      " [Sunucumuza Katıl](https://discord.gg/Wga7NSygPy)"
    )
    .addField("**» Voteleme sayfası**", " []()");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "YEDEK KOMUT2"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
