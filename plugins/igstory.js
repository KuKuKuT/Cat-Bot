const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) await conn.send2Button(m.chat, `*You must enter an Instagram username! 😿*

😸 Example:
${usedPrefix + command} toxic_devil
`.trim(), `Are you still confused about username to fetch story? Don't Worry! Click the below button, for an example search😺`, 'Search Story of Karthik Surya on Instagram 😺', `,${usedPrefix}igstory karthiksuryavlogs`, 'Search Story of Ronaldo on Instagram 😺', `,${usedPrefix}igstory cristiano`)

  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `Invalid Username! You must enter a valid username! 😿`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), `*😽 ${global.tnx} 😽*`, m)

  })

}
handler.command = /^(igs(tory)?)$/i

handler.limit = true
handler.register = true

module.exports = handler
