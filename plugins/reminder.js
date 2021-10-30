let handler = async (m, { conn, usedPrefix, isPrems, command }) => {

if (!args[0].includes('s') || !args[0].includes('m') || !args[0].includes('h') || !args[0].includes('d')) throw `You must enter the time period with *s for Seconds* or *m for Minutes* or *h for Hours* or *d for Days!* 😿\n\n😺 Example:\n*• ${usedPrefix}reminder 10s* - _Reminder for 10 Seconds._\n*• ${usedPrefix}reminder 20m* - _Reminder for 20 Minutes._\n*• ${usedPrefix}reminder 30h* - _Reminder for 30 Hours._\n*• ${usedPrefix}reminder 40d* - _Reminder for 40 Days._\n*• ${usedPrefix}reminder 40d 30h 20m 10s* - _Reminder for 10 seconds, 20 minutes, 30 hours of next 40th Day._`

let reminderUser = m.sender.split`@`[0] + '@s.whatsapp.net'

let period, reason;
let split = args[0].split('/')
period = split[0]
reason = split[1]

let ms;
if (!args[0].includes('m') || !args[0].includes('h') || !args[0].includes('d') {
    let time = args[0].replace('s', '')
    ms = convertS(time);
} else if (!args[0].includes('s') || !args[0].includes('h') || !args[0].includes('d') {
    let time = args[0].replace('m', '')
    ms = convertM(time);
} else if (!args[0].includes('s') || !args[0].includes('m') || !args[0].includes('d') {
    let time = args[0].replace('h', '')
    ms = convertH(time)
} else if (!args[0].includes('s') || !args[0].includes('m') || !args[0].includes('h') {
    let time = args[0].replace('d', '')
    ms = convertD(time)
}

var isReason = ''
if (args[0].includes('/')) {
     isReason = `Your reminder is here!\nReason: ${reason}`
} else {
     isReason = `Your reminder is here!`
}

await delay(i* ms)

conn.reply(reminderUser, isReason, m)

}
handler.command = /^(remind?er|remaind?er)$/i
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

function convertDHMS(d, h, m, s) {
  d <= 0 ? d=1 : d=d*24*60*60*1000;
  h <= 0 ? h=1 : h=h*60*60*1000;
  m <= 0 ? m=1 : m=m*60*1000;
  s <= 0 ? s=1 : s=s*1000;

  return d + h + m + s;
}

function convertD(d) {
  d <= 0 ? d=1 : d=d*24*60*60*1000;

  return d;
}

function convertH(h) {
  h <= 0 ? h=1 : h=h*60*60*1000;

  return h;
}

function convertM(m) {
  m <= 0 ? m=1 : m=m*60*1000;

  return m;
}

function convertS(s) {
  s <= 0 ? s=1 : s=s*1000;

  return s;
}

const delay = time => new Promise(res => setTimeout(res, time))

