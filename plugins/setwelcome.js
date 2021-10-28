let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*😽 Successfully set welcome message to :* ```' + text + '```\n\n *Note: You can use @user to mention the joined user, @subject to get the Group name. And @desc To get Group Description 😺*')
  } else throw `*You must enter some text to set Welcome message! 😿*\n\n😸 Example:\n${usedPrefix + command} Hey @user! Welcome to @subject\n\n@desc`
}
handler.command = /^setwelcome$/i
module.exports = handler

