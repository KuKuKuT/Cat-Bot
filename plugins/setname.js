let handler = async (m, { conn, text }) => {
  if (!text) throw `*You must enter a name to set Name!* 😿`
  try {
    await conn.updateProfileName(text)
    m.reply('*😽 Successfully Changed Name To :*\n```' + text + '```')
  } catch (e) {
    console.log(e)
    throw global.eror
  }
}
handler.command = /^(setname)$/i
handler.owner = true

module.exports = handler
