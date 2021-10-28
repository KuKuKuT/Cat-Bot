let fetch = require('node-fetch')
let handler = async (m, { conn, isOwner, text, participants, usedPrefix, command }) => {
  if (!text) throw `*Give me a number to add! 😿*\nExample:\n\n${usedPrefix + command + ' ' + global.owner[0]}`
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.isOnWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.groupAdd(m.chat, users)
  if (!response[users] == 408) {
        await conn.send2Button(m.chat, `*@${user.split`@`[0]} has added to the Group!* 😺`.trim(), 'Do you want to kick him? 😺', 'Kick Him 😼', `,${usedPrefix}abhim`, 'Kick him and scold him 😼', `,${usedPrefix}abhims`, {
            contextInfo: {
              mentionedJid: conn.parseMention(user)
            }
          })
   
        if (/abhims/i.test(command)) {
              if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
              let sryText = `
              @${user.split`@`[0]} We don't need you Damn, Get Lost ! 😼 
                                ~Cat Bot & All Members`
              await conn.groupRemove(m.chat, [user])
        
         conn.reply(m.chat, sryText, null, m, {
            contextInfo: {
              mentionedJid: conn.parseMention(user)
            }
          })
        }

        if (/abhim/i.test(command)) {
             if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
             let Text = `Bye Bye @${user.split`@`[0]}! Hope we can see again! 😿`
             await conn.groupRemove(m.chat, [user])
       
         conn.reply(m.chat, Text, null, m, {
            contextInfo: {
              mentionedJid: conn.parseMention(user)
            }
          })
        }
  if (response[users] == 408) throw `_Faild! 😿_\n\nThe number has just left out now!\nCan only enter through *${usedPrefix}link* group`
  let pp = await conn.getProfilePicture(m.chat).catch(_ => false)
  let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
  for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `😿 Faild to Add Directly!\nInviting @${jid.split`@`[0]} with Group Invite...`
    m.reply(teks, null, {
      contextInfo: {
        mentionedJid: conn.parseMention(teks)
      }
    })
    await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
}
handler.command = /^(add)$/i
handler.owner = true
handler.mods = false
handler.register = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

