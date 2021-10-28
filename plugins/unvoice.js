const { toPTT } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `*You must reply to any video or audio to convert to ptt/voice! 😿*`
  await m.reply(global.wait)
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  conn.sendFile(m.chat, audio, '', '', m, 1, { mimetype: 'audio/mp4' })
}
handler.command = /^(toptt|unvoice|voice)$/i
handler.register = true

module.exports = handler
