let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*You must enter some text to search on YouTube! 😿*\n\n*😸 Example:\n${usedPrefix + command} What is nodejs?`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
💫 Title : *${v.title}* ( ${v.url} )
💾 Duration : *${v.timestamp}*
⬆️ Uploaded : *${v.ago}*
👁️‍🗨️ Views : *${v.views}*
      `.trim()
      case 'channel': return `
💫 Title : *${v.name}* (${v.url})
👤 Subscribers : *${v.subCountLabel}* ( ${v.subCount} )
⬆️ Videos Uploaded : *${v.videoCount}*
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.command = /^yts(earch)?$/i
handler.register = true

module.exports = handler
