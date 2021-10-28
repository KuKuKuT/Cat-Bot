const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {

  if (!args[0]) await conn.send3Button(m.chat, `*You must enter an Emoji! 😿*

😸 Example:
${usedPrefix}emo 😹`, `Just Click the below button for another Example 😺`, 'Try with 😺', `,${usedPrefix}emo 😺`, 'Try with 😽', `,${usedPrefix}emo 😽`, 'Try with 😾', `,${usedPrefix}emo 😾`)

    emoji.get(`${args[1]}`)
       .then(async emoji => {
        let stiker = await sticker(false, emoji.images[4].url, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
          quoted: m
        })
      })
}
handler.command = /^emo$/i
handler.register = true

module.exports = handler
