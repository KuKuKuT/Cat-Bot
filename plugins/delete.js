let handler = function (m) {
  if (!m.quoted) throw '*You must reply to any message to delete! 😿*'
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw '*This message is not sent by me, How can I delete this? 🙀*\n*Reply to any message sent by me! 😿*'
  if (!isBaileys) throw '*This message is not sent by me, Maybe it will be sent by my owner! 😺*\n*Reply to any message sent by the bot! 😿*'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.command = /^del(ete)?$/i
handler.register = true

module.exports = handler
