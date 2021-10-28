let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
  await conn.send2Button(m.chat, `*@${user.split`@`[0]} is no Longer an Admin in this Group! 😿*`.trim(), 'Do you want to promote him back? 😺', 'Promote Him Back 😽', `,${_p}abhim`, 'Promote Him Back & Tell Sorry 😿', `,${_p}abhimsry`, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  
  if (/abhimsry/i.test(command)) {
        if (!m.sender.isAdmin || !m.sender == isOwner) throw '*You are not an Admin to do this! 😼*'
        await conn.groupMakeAdmin(m.chat, user)
        let sryText = `
        We are sorry for Demoting you in this Group! @${user.split`@`[0]} ! 😿
                          ~Cat Bot & All Members`
        
   conn.reply(m.chat, sryText, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }

  if (/abhim/i.test(command)) {
       if (!m.sender.isAdmin) throw '*You are not an Admin to do this! 😼*'
       await conn.groupMakeAdmin(m.chat, user)
       let Text = `You are now an Admin! @${user.split`@`[0]} ! 😽`
       
   conn.reply(m.chat, Text, null, m, {
      contextInfo: {
        mentionedJid: conn.parseMention(user)
      }
    })
  }
}
handler.command = /^(demote|member)$/i
handler.owner = true
handler.group = true
handler.register = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
