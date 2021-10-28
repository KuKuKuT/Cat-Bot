let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) await conn.send2Button(m.chat,`*You must enter the Query to search! 😿*\n\n😺Example:\n${usedPrefix + command} nodejs`.trim(), `Are you still confused about query to search? 😺 Select the below buttons!`, 'Search About Solar System 💬', `,${usedPrefix}google Solar System`, 'Search About Robots 🤖', `,${usedPrefix}google Robot`)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet }) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
    if (ss.includes('html')) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m, 0, { thumbnail: await (await fetch(ss)).buffer() })
  } catch (e) {
    m.reply(msg)
  }
}
handler.command = /^google?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

