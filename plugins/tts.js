let TTS = require('google-tts.js')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = 'en'
    text = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text

  let fileName = ${pickRandom(['TTS1', 'TTS2', 'TTS3', 'TTS4', 'TTS5', 'TTS6', 'TTS7', 'TTS8', 'TTS9', 'TTS0', 'HDHHXIueg', 'jeygzoI', 'husgsjid', 'ieghdk', 'jeosybsnsm', 'ieuhdozi', 'jeghdjdush', 'oeysjosusb'])}

  TTS.saveFile(`${text}`, `${lang}`, `./src/${fileName}`).then(async tts => {
     await conn.sendFile(m.chat, tts, '', '', m)
  })

}
handler.command = /^g?tts$/i
handler.register = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
