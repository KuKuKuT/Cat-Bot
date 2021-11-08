let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)
let about = await conn.getStatus(m.sender).catch(console.error) || {}.status || ''

let isBusiness = conn.user.isBusiness ? 'Business WhatsApp' : 'WhatsApp'
let Rand = [`Hi ${name}, 😽\n I am Still Alive! 😹`, `Hey ${name}, 😸\n I am safe here! 😹`, `Oii ${name}, 😺\n I am safe in my owner's {isBusiness} 😹`, `Hi ${name}, 😽\n Cat is Alive and More Active Today 😼`, `Hey ${name}, 😻\n Its me cat 😹 I am still Alive and Happy Now! 😽`]
let randHeader = pickRandom(Rand)
m.reply(`${randHeader}

╓───〚 *USER INFO* 〛
║
║ 💫 Name : ${name}
║ 💬 About : ${about}
║
║ 🔢 Number : ${m.sender.split`@`[0]} ( @${m.sender.split`@`[0]} )
║ 🆔 JID : ${m.sender.split`@`[0] + '@s.whatsapp.net'}
║ 🪀 WhatsApp : ${isBusiness.replace('Business WhatsApp', 'Business').replace('WhatsApp', 'Normal')}
║ 🔋 Battery : ${m.sender.battery ? `${m.sender.battery.value}%\n${m.sender.battery.live ? '🔌 Charging...' : '⚡ Discharging'}` : 'Unknown'}
║ 📝 Registered : *true*
║
╙───••••───`)
}
handler.command = /^(alive)$/i
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
