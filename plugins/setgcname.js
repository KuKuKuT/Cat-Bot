let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `*You must reply to an image to set Group Profile Picture! 😿*`
        conn.updateProfilePicture(m.chat, img)
        m.reply('*😽 Successfully changed Group Profile Picture!*')
    }
}
handler.command = /^(setgcpp)$/i
handler.owner = true

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
