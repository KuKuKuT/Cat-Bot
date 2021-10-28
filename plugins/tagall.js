let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {

  let users = participants.map(u => u.jid)
  m.reply(`${text ? `${text}\n` : ''}╓───〚 *TAGALL* 〛\n║\n` + users.map(v => '║ @' + v.replace(/@.+/, '')).join`\n║\n` + '╙──────••••──────', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = /^(tag?all|mention?all)$/i
handler.owner = true
handler.admin = true
module.exports = handler
