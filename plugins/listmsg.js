let handler = async (m, { usedPrefix, command }) => {
    let which = command.replace(/list/i, '')
    let msgs = global.db.data.msgs
    let split = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
    let fltr
    if (/audio/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == false)
        .map(v => '║ ' + v.nama).join('\n')
    if (/vn/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == true)
        .map(v => '║ ' + v.nama).join('\n')
    if (/video/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage && !v.message.videoMessage.gifPlayback)
        .map(v => '║ ' + v.nama).join('\n')
    if (/gif/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage)
        .filter(m => m.message.videoMessage.gifPlayback)
        .map(v => '║ ' + v.nama).join('\n')
    if (/stic?ker/i.test(command)) fltr = split.filter(v => v.message.stickerMessage).map(v => '║ ' + v.nama).join('\n')
    if (/msg/i.test(command)) fltr = split.filter(v => v.message.conversation).map(v => '║ ' + v.nama).join('\n')
    if (/img/i.test(command)) fltr = split.filter(v => v.message.imageMessage).map(v => '║ ' + v.nama).join('\n')
    m.reply(`
╓───〚 *LIST MESSAGE* 〛
${fltr}
╙──────••••──────

😽 Access/fetch by typing:
*${usedPrefix}get${which}* <name>
or directly without orders. 😺
`.trim())
}
handler.command = /^list(vn|msg|video|audio|img|stic?ker|gif)$/
handler.owner = true

module.exports = handler
