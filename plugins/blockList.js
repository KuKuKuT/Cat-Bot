let handler = async (m, { conn }) => {
    let blocked = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
    conn.reply(m.chat, `
┌〔 Daftar Terblokir 〕
├ Total : ${blocked.length} Pengguna
${blocked.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join`\n`}
└────`.trim(), m, { contextInfo: { mentionedJid: blocked } })
}
handler.command = /^listbloc?k|bloc?klist$/i
handler.owner = true

module.exports = handler
