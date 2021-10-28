const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (!teks) await m.reply(`*You must enter some text or reply to any text! 😿*`)
    await m.reply(global.wait)
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
}
handler.command = /^ttp$/i
handler.register = true

module.exports = handler
