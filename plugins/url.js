const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw "*You must reply to any media! 😿*"
  let media = await q.download()
  m.reply(global.wait)
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`🌐 Media URL: ${link}`)
}
handler.command = /^url$/i
handler.register = true

module.exports = handler
