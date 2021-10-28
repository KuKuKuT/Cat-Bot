let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  await m.reply(global.wait)
  if (!res.ok) throw global.eror
  let json = await res.json()
  if (!json.url) throw global.eror
  conn.sendFile(m.chat, json.url, '', `*😽 ${global.tnx} 😽*`, m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.command = /^(waifu)$/i
handler.register = true

module.exports = handler
