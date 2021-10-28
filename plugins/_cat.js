let handler = async (m, { conn, usedPrefix: _p }) => {
let name = await conn.getName(m.sender)
let about = await conn.getStatus(m.sender).catch(console.error) || {}).status || ''
let jid = m.sender.split`@`[0] + '@s.whatsapp.net'
let fs = require('fs')
let catLogo = fs.readFileSync('./src/image/Cat-Bot.jpg')
let pp = await conn.getProfilePicture(m.sender)
let ownjid = '94768826133@s.whatsapp.net'
let wajid = '0@s.whatsapp.net'

await conn.send2ButtonLoc(m.chat, catLogo, `
╓───〚 *@${m.sender.split`@`[0]}* 〛
║
║ 💫 Name : *${name}*
║ 🔢 Number : *${m.sender.split`@`[0]}*
║ 🔗 Link: *https://wa.me/${m.sender.split`@`[0]}*
║ 💬 About :
║ *${about}*
║
║ 🆔 JID :
║*${jid}*
║
║ 📝 Registered : *true*
║
╙───••••───

╓───〚 MISC MENU 〛*
║
║ ${_p}list
║ ${_p}attp
║ ${_p}botinfo
║ ${_p}brainly
║ ${_p}calc
║ ${_p}url
║ ${_p}vcard
║ ${_p}owner
║ ${_p}claim
║ ${_p}truth
║ ${_p}dare
║ ${_p}del
║ ${_p}achivement
║ ${_p}fb
║ ${_p}ig
║ ${_p}igstory
║ ${_p}igstalk
║ ${_p}inspect
║ ${_p}infogc
║ ${_p}nulis
║ ${_p}ocr
║ ${_p}online
║ ${_p}play
║ ${_p}whoami
║ ${_p}qr
║ ${_p}rbg
║ ${_p}readmore
║ ${_p}report
║ ${_p}semoji
║ ${_p}simi
║ ${_p}slot
║ ${_p}ping
║ ${_p}ssweb
║ ${_p}sticker
║ ${_p}font
║ ${_p}togif
║ ${_p}tovideo
║ ${_p}tomp3
║ ${_p}toimg
║ ${_p}voice
║ ${_p}total
║ ${_p}tr
║ ${_p}ttp
║ ${_p}tts
║ ${_p}voicechanger
║ ${_p}waifu
║ ${_p}wiki
║ ${_p}take
║ ${_p}yta
║ ${_p}yts
║ ${_p}ytv
║ ${_p}zodiac
║
╙──────••••──────

╓───〚 MAKER MENU 〛
║
║
║
╙──────••••──────

╓───〚 ADMIN MENU 〛
║
║ ${_p}add
║ ${_p}kick
║ ${_p}promote
║ ${_p}demote
║ ${_p}disappear
║ ${_p}group
║ ${_p}linkgc
║ ${_p}revoke
║ ${_p}tagall
║ ${_p}setgcname To Add
║ ${_p}setdesc To Add
║ ${_p}setgcpp
║
╙──────••••──────

╓───〚 OWNER MENU 〛
║
║ ${_p}addprem
║ ${_p}delprem
║ ${_p}bc
║ ${_p}bcgc
║ ${_p}listblock
║ ${_p}listgc
║ ${_p}join
║ ${_p}leavegc
║ ${_p}listprem
║ ${_p}restart
║ ${_p}setname
║ ${_p}setabout
║ ${_p}setpp
║ ${_p}setbye
║ ${_p}setwelcome
║ ${_p}update
║
║───〚 DATABASE 〛
║
║ ${_p}addmsg
║ ${_p}addvn
║ ${_p}addvideo
║ ${_p}addaudio
║ ${_p}addimg
║ ${_p}addsticker
║ ${_p}addgif
║ ${_p}delmsg
║ ${_p}delvn
║ ${_p}delvideo
║ ${_p}delaudio
║ ${_p}delimg
║ ${_p}delsticker
║ ${_p}delgif
║ ${_p}delmsg
║ ${_p}delvn
║ ${_p}delvideo
║ ${_p}delaudio
║ ${_p}delimg
║ ${_p}delsticker
║ ${_p}delgif
║ ${_p}getmsg
║ ${_p}getvn
║ ${_p}getvideo
║ ${_p}getaudio
║ ${_p}getimg
║ ${_p}getsticker
║ ${_p}getgif
║ ${_p}listmsg
║ ${_p}listvn
║ ${_p}listvideo
║ ${_p}listaudio
║ ${_p}listimg
║ ${_p}liststicker
║ ${_p}listgif
║
╙──────••••──────
`.trim(), `Oii ${name}, Thank You For Using Cat 😺`, 'DEVELOPER 😻', `,${_p}creator`, 'CLAIM XP 😸', `,${_p}claim`, { contextInfo: { mentionedJid: [m.sender] }, thumbnail: pp})
}
handler.command = /^(menu|help|cat|list|cmd)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
