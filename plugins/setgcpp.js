let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} is not supported 😿`
    if (/image/.test(mime)) {
        let img = await q.download()
        await conn.updateProfilePicture(m.chat, img)
    } else throw `*You must reply to an image to set Group Profile Photo!* 😿`
}
handler.command = /^setgcpp$/i
handler.group = true
handler.register = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
