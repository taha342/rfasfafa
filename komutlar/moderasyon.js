const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let p = "+";
  let arg = args.slice(0).join(" ");

  if (!arg[0]) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xf001fa)
      .setDescription(`[**Fors-Komutlar**]`)
      .addField(
        `**Moderasyon-Komutları**`,
        `\n<a:yldz:779808677669503017> \`f!otorol\` = Sunucu giriş yapanlara belirlediğiniz rolü verir. \n<a:yldz:779808677669503017> \`f!sayaç\` = Sunucu için sayaç ayarlar.  \n<a:yldz:779808677669503017> \`f!ban\` = İstediğiniz kişiyi sunucudan engeller. \n<a:yldz:779808677669503017> \`f!unban\` = Engellediğiniz kişinin engelini kaldırır .\n<a:yldz:779808677669503017> \`f!banlist\` = Engellenmiş kişileri gösterir.\n<a:yldz:779808677669503017> \`f!küfür-engel [aç-kapat]\` = Küfürü Engeller. \n<a:yldz:779808677669503017> \`f!reklam-engelleme \` = Reklam Paylaşmasını Engeller.  \n<a:yldz:779808677669503017> \`f!oylama\` = Oylama başlatırsınız. \n<a:yldz:779808677669503017> \`f!slowmode\` = Yavaş Modu Açar. \n<a:yldz:779808677669503017> \`f!sil\` = İstediniz Kadar Mesaj Siler. \n<a:yldz:779808677669503017> \`f!mute\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz.\n<a:yldz:779808677669503017> \`f!dc\` = Discord daveti oluşturur.\n<a:yldz:779808677669503017> \`f!capsengel\` = Capslock kullanımını engeller.`
            );
    return message.channel.sendEmbed(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "yardım", "help"],
  permlevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Gelişmiş Yardım Menüsü",
  usage: "yardım"
};
//Lord Creative
