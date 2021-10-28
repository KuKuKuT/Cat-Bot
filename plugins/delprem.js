let fs = require('fs')
let handler = async (m, { conn, text, usedPrefix: _p }) => {

    const json = JSON.parse(fs.readFileSync('./src/json/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    
    if (json.includes(who)) {
      await conn.send2Button(m.chat, `@${who.split`@`[0]} *You are already not premium!* 😹`, 'Add Premium 😽', `,${_p}addprem`, 'Git 😻', `,${_p}git`, { contextInfo: { mentionedJid: [who] }}) 
    }
    
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/json/premium.json', JSON.stringify(json))
    await conn.send2Button(m.chat, `@${who.split`@`[0]} *is no Longer a premium member/friend for Cat! 😿*`, 'Add Premium 😽', `,${_p}addprem @${who.split`@`[0]}`, 'Git 😻', `,${_p}git`, { contextInfo: { mentionedJid: [who] }}) 

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.command = /^(remove|del)prem$/i

handler.owner = true

module.exports = handler
