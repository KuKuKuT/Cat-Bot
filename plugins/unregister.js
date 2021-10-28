const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw '*You must enter your serial number to unregister! 😿*'
  let name = conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*Incorrect Serial Number 😼*\n*You must enter correct serial number! 😼*'
  user.registered = false
  m.reply(`😽 Successfully Unregistered From Bot Database! RIP ${name} 😼`)
}
handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

