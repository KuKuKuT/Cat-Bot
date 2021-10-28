let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'buka': false,
		'on': false,
		'1': false,
		'close': true,
		'tutup': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
😸 Example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), 'Select the buttons below 😺', 'open', ',group 1', 'close', ',group 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.command = /^(group)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
