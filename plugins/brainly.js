const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("en")
let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `*😿 You must enter a query!*\n😺 Example:\n${usedPrefix + command} What is nodejs?`
  brain.search("en", text).then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = json.map((v, i) => `*Question To: ${i + 1}*\n${v.question.content}\n${v.answers.map((v, i) => `*Answer To: ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n•_-_-_-_-_-_•\n\n')
    m.reply(answer)
  })
}
handler.command = /^brainly$/i
handler.register = true

module.exports = handler
