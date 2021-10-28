let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw '*You must reply to any message/media! 😿*'
    if (!text) throw `Type *${usedPrefix}list${which}* to see the list 😸`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' registered in the message list 😺`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`😽 Successfully added message in message list as '${text}'
    
Access that with ${usedPrefix}get${which} ${text} 😺`)
}
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/
handler.owner = true

module.exports = handler
