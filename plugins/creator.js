function handler(m) {
  this.sendContact(m.chat, '94768826133', 'TOXIC DEVIL', m)
}
handler.command = /^(owner|creator)$/i
handler.register = true

module.exports = handler
