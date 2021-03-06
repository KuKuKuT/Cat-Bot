const { igdl } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*You must enter a post url from Instagram! šæ*\n\nšŗ Example:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `Invalid URL! You must enter a vaild URL of post/reel/tv! šæ`

  igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), `*š½ ${global.tnx} š½*`, m)
    }
  })

}
handler.command = /^(ig|instagram)$/i
handler.register = true
handler.limit = true

module.exports = handler
