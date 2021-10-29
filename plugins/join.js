let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isOwner, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) await conn.sendButton(m.chat, `*You have entered an Invalid Group Link! 😿*
😸 Example:
${usedPrefix}join <cat bot support group link>
`.trim(), `Do you want to Join cat Support Group? Click the button to Join! 😺`, 'Join Cat Support Group! 😽', `,${usedPrefix}join <cat bot support group link>`)

   let choise
   if (m.sender == isOwner) {
     if (args[0].includes('owner')) {
        choise = true
     } else if (args[0].includes('everyone')) {
        choise = false
     }

     let rchoise
     if (choise == true) {
        rchoise = true
     } else {
        rchoise = false
     }

    let res = await conn.acceptInvite(code)
    m.reply(`😽 Successfully Joined to *${res.subject} - ${res.gid}*`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.send2Button(res.gid, `
🤝 Hey there! This is a WhatsApp Bot which is called Cat 😺, I have invited to this group by 😽 @${m.sender.split`@`[0]} 
`.trim(), '😽 Click the Menu button to see my Command list! 😺', `Menu 😺`, `${usedPrefix}cat`, `Leave this Group 😼`, `${usedPrefix}jlfmso`, { contextInfo: { mentionedJid: [m.sender] } })

     if (/jlfmso/i.test(command)) {
        if (m.sender.isAdmin == true || m.sender == isOwner) {
             await m.reply(`😿 Bye Bye Guys! The Person who invited me here has decided to get me out. See you guys later! 😿`)
             conn.groupLeave(m.chat)
        } else {
             await m.reply(`*😼 You are not an Admin to decide whether I should stay here or not. 😼*`)
        }
      }
}
handler.command = /^join$/i

handler.premium = false
handler.owner = choise
handler.register = rchoise

module.exports = handler
