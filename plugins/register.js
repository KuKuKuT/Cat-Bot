const { createHash } = require('crypto')
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let Rname = await conn.getName(m.sender)
  let about = await conn.getStatus(m.sender).catch(console.error) || {}).status || ''
  let pp = await conn.getProfilePicture(m.sender)
  if (user.registered === true) throw `*You are already a Registered š¹š¹*`
  if (!text.includes('|')) throw `*Invalid Format! šæ*\n\nšø Example:\n*${usedPrefix + command} Name|age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*You must enter your name with Age!* šæ'
  if (!age) throw '*You must enter your age with Name!* šæ'
  age = parseInt(age)
  if (age > 70) throw '*Hey Grandfather! š¹ Do you know to tell truth š¹*'
  if (age < 5) throw '*Hey Kid! š¹ Do you know to tell truth š¹*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')

await conn.send2ButtonLoc(m.chat, catLogo, `
āāāāć *Registered Info š½* ć
ā
ā š« Name : *${name}*
ā āØļø Age : *${age}*
ā 9ļøā£ SN : *${sn}*
ā ā±ļø Time : *${regTime}*
ā 
āāāāć *User Info š¤* ć
ā
ā š« Name : *${Rname}*
ā š¬ About : *${about}*
ā š¢ Number : *${m.sender.split`@`[0]}*
ā š Link : *https://wa.me/${m.sender.split`@`[0]}*
ā š JID : *${m.sender.split`@`[0] + '@s.whatsapp.net'}*
ā š Registered : *true*
ā
āāāāā¢ā¢ā¢ā¢āāā
`.trim(), `Oii ${name}, Thank You For being Friend ( Register ) with Cat šŗ`, 'Hehe š¹', `,${_p}iiii`, 'Unregister šæ', `,${_p}unreg ${sn}`, { thumbnail: pp})

}
handler.command = /^(reg(ister)?)$/i

module.exports = handler

