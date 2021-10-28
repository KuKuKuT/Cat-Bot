const { createHash } = require('crypto')
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let Rname = await conn.getName(m.sender)
  let about = await conn.getStatus(m.sender).catch(console.error) || {}).status || ''
  let pp = await conn.getProfilePicture(m.sender)
  if (user.registered === true) throw `*You are already a Registered 😹😹*`
  if (!text.includes('|')) throw `*Invalid Format! 😿*\n\n😸 Example:\n*${usedPrefix + command} Name|age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*You must enter your name with Age!* 😿'
  if (!age) throw '*You must enter your age with Name!* 😿'
  age = parseInt(age)
  if (age > 70) throw '*Hey Grandfather! 😹 Do you know to tell truth 😹*'
  if (age < 5) throw '*Hey Kid! 😹 Do you know to tell truth 😹*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')

await conn.send2ButtonLoc(m.chat, catLogo, `
╓───〚 *Registered Info 😽* 〛
║
║ 💫 Name : *${name}*
║ ✨️ Age : *${age}*
║ 9️⃣ SN : *${sn}*
║ ⏱️ Time : *${regTime}*
║ 
║───〚 *User Info 👤* 〛
║
║ 💫 Name : *${Rname}*
║ 💬 About : *${about}*
║ 🔢 Number : *${m.sender.split`@`[0]}*
║ 🔗 Link : *https://wa.me/${m.sender.split`@`[0]}*
║ 🆔 JID : *${m.sender.split`@`[0] + '@s.whatsapp.net'}*
║ 📝 Registered : *true*
║
╙───••••───
`.trim(), `Oii ${name}, Thank You For being Friend ( Register ) with Cat 😺`, 'Hehe 😹', `,${_p}iiii`, 'Unregister 😿', `,${_p}unreg ${sn}`, { thumbnail: pp})

}
handler.command = /^(reg(ister)?)$/i

module.exports = handler

