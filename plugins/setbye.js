let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('*😽 Successfully Set Bye Message :*\n ```' + text + '```\n\n*😸 Note: You can use @user to mention the joined user.*')
  } else throw `*You must enter some text to set bye message! 😿*\n\n😸 Example:\n${usedPrefix + command} Good Bye @user!`
}
handler.command = /^setbye$/i
module.exports = handler

