let { spawn } = require('child_process');
let handler = async (m, { conn }) => {
  if (!process.send) throw global.eror
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```😺 Cat is Restarting... ```\n*🔄 This may take a few moments!*')
    await global.db.write()
    process.send('reset')
  } else throw global.eror
}
handler.command = /^(restart|reboot)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

