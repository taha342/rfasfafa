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
        `**Kullanıcı-Komutları**`,
        `<a:kanltik:779438002803441764> \`f!başvuru\` = Yetkili Başvuru Sistemi. \n<a:kanltik:779438002803441764> \`f!uptime [Bakımda]\` = Botunuz Uptimeye Basılır. \n<a:kanltik:779438002803441764> \`f!sikayet\` = Şikayet de bulunursunuz.[Fors Sunucusuna Gider.] \n<a:kanltik:779438002803441764> \`f!ping\` = Botun Pingini gösterir. \n<a:kanltik:779438002803441764> \`f!avatar\` = Avatarını gösterir.\n<a:kanltik:779438002803441764> \`f!rolbilgi\` = Rol hakkında bilgi alırsınız.\n<a:kanltik:779438002803441764> \`f!yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız.  \n<a:kanltik:779438002803441764> \`f!kullanıcıbilgim\` = Bilgilerinizi Gösterir.  \n<a:kanltik:779438002803441764> \`f!istatistik\` = Botun İstatistiklerini Görüntüler. \n<a:kanltik:779438002803441764> \`f!say\` = Sunucudaki Üyeleri Sayar.`
      );
    return message.channel.sendEmbed(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "y"],
  permlevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "Gelişmiş Yardım Menüsü",
  usage: "yardım"
};
//Lord Creative
