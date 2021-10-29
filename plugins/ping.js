let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')

let name = conn.getName(m.sender)
let about = conn.getStatus(m.sender).catch(console.error) || {}).status || ''
let jid = m.sender.split`@`[0] + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
let developed = ''
let date = '2021 11 1'
let d = new Date()
let ageD = new Date(d - date)
let age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let isHigh 
  if (speed =< 100) {
      isHigh = 'Low'
  } else if (speed => 100 && speed =< 900) {
      isHigh = 'Normal'
  } else if (speed => 900 && speed =< 1110) {
      isHigh = 'Moderate'
  } else {
      isHigh = 'High'
  }

let ihEmo
  if (isHigh == 'Low') ihEmo = '⬇️'
  if (isHigh == 'Normal') ihEmo = '↔️'
  if (isHigh == 'Moderate') ihEmo = '↙️'
  if (isHigh == 'High') ihEmo = '⬆️'

let pingInfo = `╓───〚 *💬 Ping Info* 〛\n║\n║ 😽 Ping : *${speed}*\n║ ${ihEmo} Ping Level : *${isHigh} / Normal*\n║\n║───〚 *👤 User Info* 〛\n║\n║ 💫 Name : *${name}*\n║ 💬 About : *${about}*\n║ 🆔 JID : *${jid}*\n║ 🔢 Number : *${m.sender.split`@`[0]}*\n║ 🔗 Link : *https://wa.me/${m.sender.split`@`[0]}*\n║ 🧑‍💻 XP : *${user.exp}*\n║ ✋️ Limit : *${user.limit}*\n║ ⬆️ Level : *${user.level}*\n║ 👤 Role : *${user.role}*\n║ 📝 Registered : *true*\n║\n║───〚 *😺 Bot Info* 〛\n║\n║ 😺 Name : *Cat*\n║ 👤 Age : *${age}*\n║ 🎂 Developed : *${Developed}*\n║ 👑 Developer : *TOXIC DEVIL*\n║\n╙──────••••──────`

  conn.reply(m.chat, pingInfo, '', m)
}
handler.command = /^(ping)$/i
handler.register = true

module.exports = handler
