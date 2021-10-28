let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/del/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list 😺`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' not registered in message list 😿`
    delete msgs[text]
    m.reply(`😽 Successfully deleted message in message list with name '${text}'`)
}
handler.command = /^del(vn|msg|video|audio|img|stic?ker|gif)$/
handler.owner = true

module.exports = handler
