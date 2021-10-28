let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*You must enter some text to chat with simi 😿*\n\n😸 Example:\n${usedPrefix + command} hi simi`
  if (text.includes('Hi')) await m.reply(`Hi there! I am simi simi, How can I help you?`)
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=en&ml`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.result == `I don't know what you're saying. Please teach me`) await m.reply(`I didn't understand what you are saying.`)
  await m.reply('*🤖 Simi :* ```' + ${json.result} + '```')
}
handler.command = /^(simi)$/i
handler.register = true

module.exports = handler
