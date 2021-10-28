const { toAudio } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `*You must reply to any video or audio to make voice! 😿*`
  await m.reply(global.wait)
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendFile(m.chat, audio, '', '', m, 0, { mimetype: 'audio/mp4' })
}
handler.command = /^to(mp3|a(udio)?)|unvoice$/i
handler.register = true

module.exports = handler
