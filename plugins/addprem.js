let fs = require('fs')
let handler = async (m, { conn, usedPrefix: _p, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/json/premium.json'))
    let name = await conn.getName(m.sender)
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat

    if (json.includes(who.split`@`[0])) {
      await conn.send2Button(m.chat, `@${who.split`@`[0]} *You are already a premium member! 😹*`.trim()), `He is already my premium friend 😽 Give any other one 😹`, 'Git 😻', `,${_p}git`, 'Developer? 😻', `,${_p}creator`, {
        contextInfo: { mentionedJid: [who] }
      }) 
    }

    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/json/premium.json', JSON.stringify(json))
    await conn.send2Button(m.chat, `😽 Congratulations @${who.split`@`[0]}, You are now a premium member! 😻`.trim()), `😻 Thanks Owner! I got a new premium friend, ${name} 😽`, 'Git 😻', `,${_p}git`, 'Developer? 😻', `,${_p}creator`, {
      contextInfo: { mentionedJid: [who] }
    })

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.command = /^(addprem?ium)$/i

handler.owner = true

module.exports = handler
