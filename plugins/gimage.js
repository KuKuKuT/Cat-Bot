let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) await conn.send2Button(m.chat,`*You must enter the image catogory/name to search for image! 😿*\n\n😺Example:\n${usedPrefix + command} Earth`.trim(), `Are you again confused about subject to search? 😺 Select the below buttons!`, 'Search For Cat Image 🐱', `,${usedPrefix}image Cute Cat`, 'Search for Dog Image 🐶', `,${usedPrefix}image cute dog`)
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'image', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.command = /^(image)$/i
handler.register = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
