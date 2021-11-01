let handler = async(m, { conn, usedPrefix, command, args }) => {
  text = args[0] || ''
  if (text.toLowerCase() == 'multi') {
    global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&,.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
    m.reply('*😽 Successfully set prefix as multi!*')
  } else if (text.toLowerCase() == 'random') {
    let rand = ['+', 'x', 'z', '-', '$', '*', '@', '√', '=', '₹', ':', '~', '×', '•', '|', ';', '_', '/', '%', '#', '&', '?', '!', '.']
    global.prefix = rand[Math.floor(Math.random() * rand.length)]
    m.reply('*😽 Successfully set prefix as ' + global.prefix + '*')
  } else if (text != '') {
    global.prefix = text
    m.reply('*😽 Successfully set prefix as ' + global.prefix + '*')
  } else {
    m.reply(`*You must enter a prefix/symbol! 😿*\n\n😸 Example:\n• ${usedPrefix}setprefix !\n• ${usedPrefix}setprefix .`)
  }
}
handler.command = /^setprefix/i
handler.owner = true
handler.mods = true

module.exports = handler
