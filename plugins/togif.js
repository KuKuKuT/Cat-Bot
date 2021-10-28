let { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `*You must reply to any sticker! 😿*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `*You must reply to any sticker! 😿*`
    let media = await m.quoted.download()
    await m.reply(global.wait)
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendFile(m.chat, out, 'out.gif', `*😽 ${global.tnx} 😽*`, m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}
handler.command = /^(togif|sgif)$/i
handler.register = true

module.exports = handler
