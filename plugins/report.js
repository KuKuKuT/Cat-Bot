let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*You must enter the error/report to sent to the Developer! 😿*`
    if (text.length < 10) throw `*Report is too short, You must enter minimum 10 text/character! 😿*`
    if (text.length > 1000) throw `*Report is too long, The maximum text/character length is 1000! 😿*`
    let teks = `
╓───〚 *REPORT* 〛
║
║ From : *@${m.sender.split`@`[0]}*
║
║ Message : ${text}
║
╙──────••••──────`
    conn.reply('94768826133@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`*😽 Successfully sent report to the Developer.*`)
}
handler.command = /^(report)$/i
handler.register = true

module.exports = handler
