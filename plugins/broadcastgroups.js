let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `*😽 Sending Broadcast messages to ${groups.length} group(s)...*\nEstimation Time to Complete: ${groups.length * 1.5} Seconds!`, m)
  for (let id of groups) {
    await delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '〔 😼 Cat Bot Broadcast 😼 〕\n\n' + teks), true).catch(_ => _)
  }
  m.reply('*😺 Successfully sent broadcast messages!*')
}
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
