const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) await conn.send2Button(m.chat, `*You must enter an Instagram username! 😿*

😸 Example:
${usedPrefix + command} toxic_devil
`.trim(), `Are you still confused about username to fetch details? Don't Worry! Click the below button, for an example search😺`, 'Search Cristiano Ronaldo on Instagram 😸', `,${usedPrefix}igstalk cristiano`, 'Search XXXTENTACION on Instagram', `,${usedPrefix}igstalk xxxtentacion`)

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw global.eror
  let json = await res.json()
  if (json.status != 200) throw global.eror
  conn.sendFile(m.chat, json.data.profilehd, 'igstalk.jpg', `💫 Name : *${json.data.fullname}*\n💬 Bio : ${json.data.bio}\n👤 Followers : *${json.data.follower}*\n🫂 Following : *${json.data.following}*\n🅿️ Posts : *${json.data.timeline}*\n🔒 Private : *${json.data.private ? 'Yes' : 'No'}*`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.command = /^(igstalk)$/i
handler.limit = true
handler.register = true

module.exports = handler
