let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)

 let res = await fetch(API('pencarikode', '/api/dareen', {}, 'apikey'))
 if (!res.ok) throw global.eror
 let json = await res.json()
 await conn.send2Button(m.chat, json.message, `*😽 ${name}, ${global.tnx} 😽*`, 'Truth 😺', `${usedPrefix}truth`, 'Dare 😼', `${usedPrefix}dare`, m)

}
handler.command = /^(dare)$/i
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
