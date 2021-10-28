let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) {
		await conn.send2Button(m.chat, `Invalid Format! 😿
		
😺 Example:
${usedPrefix + command} on
${usedPrefix + command} off
	`.trim(), 'Select the buttons below 😺', 'on', ',on', 'off', ',off')
		throw false
	}

if (args[0] == 'on') {
	await conn.toggleDisappearingMessages(
        m.chat,
        7 * 24 * 60 * 60)
        await m.reply(`*😽 Successfully turn on Disappearing Message!*`)
}
else if (args[0] == 'off') {
	await conn.toggleDisappearingMessages(
        m.chat,
        0)
	await m.reply(`*😽 Successfully turn off Disappearing Message!*`)
}
else {
	await conn.send2Button(m.chat, `Invalid Format! 😿

😺 Example:
${usedPrefix + command} on
${usedPrefix + command} off
	`.trim(), 'Select the buttons below 😺', 'on', ',on', 'off', ',off')
		throw false
	}
      }
}
handler.command = /^(disappear)$/i
handler.owner = true
handler.mods = false
handler.register = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true

module.exports = handler
