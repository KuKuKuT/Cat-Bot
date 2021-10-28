const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split`/`
    author = (author || []).join`/`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (!args[0].includes('/')) await m.reply(`*You must reply to any sticker and type the pack name and author name by splitting with / symbol! 😿*`)

    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      stiker = await sticker(0, out, packname || '', author || '')
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      stiker = await sticker(0, link, packname || '', author || '')
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw '*You must reply to any video which is below 11 seconds! 😿!'
      let img = await q.download()
      let link = await uploadFile(img)
      stiker = await sticker(0, link, packname || '', author || '')
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw '*You must reply to any sticker and type the pack name and author name by splitting with / symbol! 😿*'
  }
}
handler.command = /^(take|wm)$/i

handler.register = true
handler.limit = true

module.exports = handler
