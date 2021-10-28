let handler = async (m, { conn, args }) => {
  let json = await conn.groupMetadata(group)
  let id = await conn.groupInviteCode(m.chat)
  m.reply(`_🔗 Group link of_ *${json.subject}*\nhttps://chat.whatsapp.com/${id}\n\n*Cat bot 😺*`)
}
handler.command = /^link(gro?up)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

