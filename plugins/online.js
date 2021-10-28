let handler = async (m, { conn, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  try {
    let online = [...Object.keys(conn.chats.get(id).presences), conn.user.jid]
    conn.reply(m.chat, '╓───〚 *LIST ONLINE* 〛\n' + online.map(v => '║ @' + v.replace(/@.+/, '')).join`\n` + '\n╙──────••••──────', m, {
      contextInfo: { mentionedJid: online }
    })
  } catch (e) {
    m.reply(global.eror)
  }
}
handler.command = /^(here|(list)?online)$/i
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

