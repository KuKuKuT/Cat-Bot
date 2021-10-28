let handler = async (m, { conn, isOwner, usedPrefix: _p, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
    await conn.send2Button(m.chat, `*@${user.split`@`[0]} is now an Admin in this Group!* 😽`.trim(), 'Do you want to demote him back? 😺', 'Demote Him Back 😽', `,${_p}abhim`, 'Demote Him Back & Scold 😼', `,${_p}abhimsry`, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  
  if (/abhimsry/i.test(command)) {
        if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
        await conn.groupDemoteAdmin(m.chat, user)
        let sryText = `
        @${user.split`@`[0]} We don't need you as Admin Damn, Get Lost ! 😼
                          ~Cat Bot & All Members`
        
   conn.reply(m.chat, sryText, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }

  if (/abhim/i.test(command)) {
       if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
       await conn.groupDemoteAdmin(m.chat, user)
       let Text = `You are an Admin again! @${user.split`@`[0]} ! 😽`
       
   conn.reply(m.chat, Text, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }
}
handler.command = /^(promote|admin)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
