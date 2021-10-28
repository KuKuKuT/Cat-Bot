let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw '*You must enter some text to search video on YouTube! 😿*'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  try {
    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(isLimit ? `📦 File Size : *${filesizeF}*\n📦 File Size Above : *${limit} MB*\n🔗 Link : *${dl_link}*` : global.wait)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
    catch (e) { }
    if (!isLimit) conn.sendFile(m.chat, dl_link, '', `
💫 Title : *${title}*
📦 File Size : *${filesizeF}*
  `.trim(), m, 0, {
      ..._thumb,
      asDocument: chat.useDocument
    })
  } catch (e) {
    return await conn.sendButton(m.chat, global.eror, 'Please try again by clicking below button! 😿', 'Try Again 😿', `${usedPrefix + command} ${args[0]}`)
  }
}
handler.command = /^yt(v|mp4)?$/i
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

