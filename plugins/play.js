const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*You must enter a song/video name! šæ*\n\nšŗ Example:\n${usedPrefix + command} Imagine Dragons - Believer`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw global.eror
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(global.eror)
    }
  }
  if (yt === false) throw global.eror
  if (yt2 === false) throw global.eror
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
š« Title : *${title}*
š¦ Audio Size : *${filesizeF}*
š¦ Video Size : *${yt2.filesizeF}*
š” Used Server : *${usedServer}*
`.trim(), 'Click Audio to get Audio & Click Video to get Video! š½', 'Audio šŗ', `${usedPrefix}yta ${vid.url}`, 'Video šŗ', `${usedPrefix}yt ${vid.url}`)
}
handler.command = /^(song|music|play)$/i
handler.register = true

module.exports = handler
