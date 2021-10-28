let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list 😺`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) throw `'${text}' not registered in message list! 😿`
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    await _m.copyNForward(m.chat, true)
}
handler.command = /^get(vn|msg|video|audio|img|stic?ker|gif)$/
handler.owner = true

module.exports = handler
