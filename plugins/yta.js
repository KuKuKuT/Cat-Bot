let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `*You must enter a music/video name to search! šæ*\n\nšø Example:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `š¦ File Size : *${filesizeF}*\nš File Size Above : *${limit} MB*\nš Link : *${dl_link}*` : global.wait)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
š« Title : *${title}*
š¦ File Size : *${filesizeF}*
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4'
  })
}
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

