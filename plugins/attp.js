const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) await m.reply(global.wait)
  if (text) conn.sendFile(m.chat, 'https://api.xteam.xyz/attp?file&text=' + encodeURIComponent(text), 'attp.webp', '', m, false, { asSticker: true })
  else throw '*😿 You must enter a text!*'
}
handler.command = /^attp$/i
handler.register = true

module.exports = handler
