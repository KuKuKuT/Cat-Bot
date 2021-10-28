let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {

    let res = await fetch(API('pencarikode', '/api/truthen', {}, 'apikey'))
    if (!res.ok) throw global.eror
    let json = await res.json()
    await conn.send2Button(m.chat, json.message, `Don't cheat me 😹`, 'Truth 🤫', `${usedPrefix}truth`, 'Dare 😏', `${usedPrefix}dare`, m)
}
handler.command = /^(truth)$/i
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
