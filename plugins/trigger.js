const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `*You must reply to any image to make trigger! 😿*`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*Mime ${mime} is not supported! 😿*`;
  await m.reply(global.wait)
  let img = await q.download();
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let marah = global.API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: m.quoted.toString('base64')
  })
  await conn.sendMessage(m.chat, marah, MessageType.image, {
    quoted: m
  })
}
handler.command = /^(trigger?ed)$/i

module.exports = handler
