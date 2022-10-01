const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: .başvuru Yetkili olunca yapabileceğiniz şeyleri belirtiniz. <a:kaytcarp:841782363218509835>'));
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setDescription('Başvurunuz başarıyla bildirildi. <a:kaytk:841782363687092224>')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("BLACK")
.setFooter('Tanrısız Başvuru Sistemi', client.user.avatarURL())
.setDescription(`<a:loadng:848860169726459925> **${message.author.tag}** Adlı Kullanıcıdan Başvuru İsteği Aldım:`)
.addField(`Kullanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nİlgilenecek Yetkili: <@&848128739710599188> `)
.addField("Başvuru Açıklaması", type)
.setTimestamp()
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('848861968961372200').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["başvuru","başvur"],
  permLevel: 0 
};

exports.help = {
  name: 'basvuru',
  description: 'Başvuru de bulunursunuz.',
  usage: 'basvuru <Basvuru>'
};
