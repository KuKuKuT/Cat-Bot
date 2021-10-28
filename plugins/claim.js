const free = 500
const prem = 5000
let handler = async (m, { conn, usedPrefix, isPrems, command }) => {
  let time = db.data.users[m.sender].lastclaim + 86400000

  if (new Date - db.data.users[m.sender].lastclaim < 86400000) await conn.sendButton(m.chat, `*😼 You have claimed daily claim today!*
😽 Claim Again: *${msToTime(time - new Date())}*
`.trim(), `Do you want a reminder for knowing when the daily/claim is be available? Click the button! 😺`, 'Remind me when claim is Available! 😸', `,${usedPrefix}ddIremind`)

if (/ddIremind/.test(command)) {
     let userToRemind = m.sender.split`@`[0] + '@s.whatsapp.net'
     await m.reply('😽 Cat will remind you by messaging in your Private Chat, When claim is Available! 😸')
     await delay(i * time)
     await conn.reply(userToRemind, `*😺 Your Claim is Available Now! 🎉*\nYou can type *${usedPrefix}claim* to Claim it now! 😸`, m)
  }

  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  m.reply(`😽 Congratulations! You Got *+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} XP*`)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
