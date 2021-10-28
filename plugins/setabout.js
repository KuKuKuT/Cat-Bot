let handler = async (m, { conn, text, args }) => {
  if (!text) throw '*You must enter some words to change about! 😿*'
  try {
    await conn.setStatus(text)
    m.reply('*😽 Successfully Changed about to :* ```' + args[0] + '```')
  } catch (e) {
    console.log(e)
    throw global.eror
  }
}
handler.command = /^(setabout|setbio)$/i
handler.owner = true

module.exports = handler
