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
        `**Eğlence-Komutları**`,
        `<a:fors34:778005711509913621> \`f!balıktut\` = Balık Tutarsın.  \n<a:fors34:778005711509913621> \`f!pixelfoto\` = Avatarın renklerini ters çevirir. \n<a:fors34:778005711509913621> \`f!tokengöster\` = Botun Tokenini Gösterir. :D \n<a:fors34:778005711509913621> \`f!kralol\` = Kral Olursunuz. \n<a:fors34:778005711509913621> \`f!espri\` = Soğuk Bir Espri Yapar. \n<a:fors34:778005711509913621> \`f!evlenmeteklifi\` = Evlenme Teklifi Yapar. \n<a:fors34:778005711509913621> \`f!düello\` = İstediğiniz Kişiyle Düello Atarsınız. \n<a:fors34:778005711509913621> \`f!kaçcm\` Malafatını Söyler. \n<a:fors34:778005711509913621> \`f!tkm\` = Taş kağıt makas oyununu oynar.`
      );
    return message.channel.sendEmbed(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence", "Eğlence"],
  permlevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Gelişmiş Yardım Menüsü",
  usage: "yardım"
};
//Lord Creative
