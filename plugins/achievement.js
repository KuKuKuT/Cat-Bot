let handler = async (m) => {
    let who
    if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`╓───〚 *@${who.split`@`[0]} 〛\n║\n║ 💫 Limit : ${user.limit}*\n║ 🧑‍💻 XP : *${user.exp}*\n║ ⬆️ Level : *${user.level}*\n║ 👤 Role *${user.role}*\n╙──────••••──────`)
}
handler.command = /^(achievement)$/i
handler.register = true

module.exports = handler
