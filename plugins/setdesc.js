let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : args[0]
    if (!q) throw `*You must enter or reply to some text to set description! 😿*`
    conn.groupUpdateDescription(m.chat, q)
    m.reply('*😽 Successfully changed Group Description to :* ```' + q + '```')
}
handler.command = /^(setgcpp)$/i
handler.owner = true

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
