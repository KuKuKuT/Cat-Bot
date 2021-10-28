let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  if (!args[0]) throw `*You must enter a link to get Screenshot! 😿*`
  let url = /https:?www\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', `*😽 ${global.tnx} 😽*`, m, 0, { thumbnail: ss })
}
handler.command = /^ss(web)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

