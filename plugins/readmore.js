let handler = async (m, { conn, text }) => {
  let [ l, r ] = text.split`/`
  if (!l) throw '*You must enter a word by spliting it with / symbol! 😿*'
  if (!r) throw '*You must enter a word by spliting it with / symbol! 😿*'
  conn.reply(m.chat, l + readMore + r, m)
}
handler.command = /^(readmore|rm)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
