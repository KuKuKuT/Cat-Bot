let handler = async (m, { conn, args, command, isOwner, usedPrefix: _p }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  await conn.send2Button(m.chat, `*@${user.split`@`[0]} is no Longer an member in this Group!* 😼`.trim(), 'Do you want to add him back? 😺', 'Add Him Back 😽', `,${_p}abhim`, 'Add Him Back & Tell Sorry 😿', `,${_p}abhimsry`, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  
  if (/abhimsry/i.test(command)) {
        if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
        await conn.groupAdd(m.chat, user)
        let sryText = `
        We are sorry for Removing you from this Group! @${user.split`@`[0]} ! 😿
                          ~Cat Bot & All Members`
        
   conn.reply(m.chat, sryText, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }

  if (/abhim/i.test(command)) {
       if (!m.sender.isAdmin) throw '*You are not an Admin to do this! 😼*'
       await conn.groupAdd(m.chat, user)
       let Text = `Welcome Back @${user.split`@`[0]} ! 😽`
       
   conn.reply(m.chat, Text, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }
}
handler.command = /^(kick|remove)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

