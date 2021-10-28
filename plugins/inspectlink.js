let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) await conn.sendButton(m.chat, `*You have entered an Invalid Group Link! 😿*
😸 Example:
${usedPrefix}inspect <cat bot support group link>
`.trim(), `Do you want an Example details? Click the button to Inspect cat support group! 😺`, 'Inspect cat support group! 😽', `,${usedPrefix}inspect <cat bot support group link>`)

  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `╓───〚 *Group Link Inspector* 〛
║
║ 💫 Title : *${res.subject}*
║ 👑 Creator : *@${res.id.split('-')[0]}*
║ ⏱️ Created Time : *${formatDate(res.creation * 1000)}*
║ 👤 Member Count : *${res.size}*
║ ${res.desc ? `Description :
║ *${res.desc}*` : 'No Description'}
╙───••••───`
  let pp = await conn.getProfilePicture(res.id).catch(console.error)
  if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', null, m)
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(caption)
    }
  })
}
handler.command = /^inspect$/i
handler.register = true

module.exports = handler

function formatDate(n, locale = 'en') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
