let handler = async (m, { conn }) => {
    let bot = conn.user.jid 
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `*You must reply to an image to set Profile Picture! 😿*`
        conn.updateProfilePicture(bot, img)
        m.reply('*😽 Successfully changed Profile Picture!*')
    }
}
handler.command = /^(setpp)$/i
handler.owner = true

module.exports = handler
