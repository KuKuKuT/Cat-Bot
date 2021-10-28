let handler = async (m, { conn }) => {
  let res = await conn.revokeInvite(m.chat)
  await conn.sendButton(m.chat, `
*🔗 New Link :*
https://chat.whatsapp.com/${res.code}
`.trim(), `Do you want to revoke link again? Click the button below! 😺`, `Revoke Again 😹`, `,${_p}revoke`)

}
handler.command = /^revoke?$/i
handler.group = true
handler.register = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
