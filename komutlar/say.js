const Discord = require("discord.js");
const { oneLine, stripIndents } = require("common-tags");
module.exports.run = async (client, message, args) => {
  if (
    !message.member.roles.has("779032082072338432") &&
    !message.member.hasPermission("MANAGE_MESSAGES")
  )
    return message.channel.send(hata).then(m => m.delete(10000));
  let guild = "779032116889124865";
  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ");
  var üs = üyesayısı.match(/([0-9])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "0": `<a:0_:778383313911021608>`,
        "1": `<a:1_:778383309931675718>`,
        "2": `<a:2_:778383310841053245>`,
        "3": `<a:3_:778383311281324067>`,
        "4": `<a:4_:778383312158326814>`,
        "5": `<a:5_:778383313051058216>`,
        "6": `<a:6_:778383313982586940>`,
        "7": `<a:7_:778383316021542912>`,
        "8": `<a:8_:778383316448837733>`,
        "9": `<a:9_:778383316532985896>`
      }[d];
    });
  } /////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ");
  var üs2 = sessayı.match(/([0-9])/g);
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
        "0": `<a:0_:778383313911021608>`,
        "1": `<a:1_:778383309931675718>`,
        "2": `<a:2_:778383310841053245>`,
        "3": `<a:3_:778383311281324067>`,
        "4": `<a:4_:778383312158326814>`,
        "5": `<a:5_:778383313051058216>`,
        "6": `<a:6_:778383313982586940>`,
        "7": `<a:7_:778383316021542912>`,
        "8": `<a:8_:778383316448837733>`,
        "9": `<a:9_:778383316532985896>`
      }[d];
    });
  }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "∆";
  message.guild.members.forEach(member => {
    if (member.user.username.includes(tag)) {
      tagdakiler = tagdakiler + 1;
    }
  });
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ");
  var üs3 = tagdakilerr.match(/([0-9])/g);
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
        "0": `<a:0_:778383313911021608>`,
        "1": `<a:1_:778383309931675718>`,
        "2": `<a:2_:778383310841053245>`,
        "3": `<a:3_:778383311281324067>`,
        "4": `<a:4_:778383312158326814>`,
        "5": `<a:5_:778383313051058216>`,
        "6": `<a:6_:778383313982586940>`,
        "7": `<a:7_:778383316021542912>`,
        "8": `<a:8_:778383316448837733>`,
        "9": `<a:9_:778383316532985896>`
      }[d];
    });
  }
  //////////////////////////////////////////
  var onlayn = message.guild.members
    .filter(m => m.presence.status !== "offline")
    .size.toString()
    .replace(/ /g, "    ");
  var üs4 = onlayn.match(/([0-9])/g);
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
        "0": `<a:0_:778383313911021608>`,
        "1": `<a:1_:778383309931675718>`,
        "2": `<a:2_:778383310841053245>`,
        "3": `<a:3_:778383311281324067>`,
        "4": `<a:4_:778383312158326814>`,
        "5": `<a:5_:778383313051058216>`,
        "6": `<a:6_:778383313982586940>`,
        "7": `<a:7_:778383316021542912>`,
        "8": `<a:8_:778383316448837733>`,
        "9": `<a:9_:778383316532985896>`
      }[d];
    });
  }
  ///codare farkıyla bebeğim
  const emoji1 = client.emojis.get("697069423315386378");
  const embed1 = new Discord.RichEmbed()
    .setColor("000000")
    .setAuthor("")
    .setDescription(
      ` <a:yldz:779808677669503017> **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n <a:yldz:779808677669503017> **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n <a:yldz:779808677669503017> **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n <a:yldz:779808677669503017> **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`
    )
    .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`);

  const hata = new Discord.RichEmbed()
    .setColor("000000")
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`);

  msg.channel.send(embed1);

  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total", "toplam", "say", "info"],
  permLevel: 0
};
exports.help = {
  name: "say"
};
