let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `╓───〚 *List Premium Members* 〛` + `\n` + prem.map(v => isOwner ? '║ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n╙──────••••──────', m, { contextInfo: { mentionedJid: prem } })
}
handler.command = /^(listprem|premlist)$/i
handler.owner = true

module.exports = handler
