const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `*You must enter the language and text to translate! 😿*

😸 Example:
${usedPrefix + command} <lang> [text]
${usedPrefix + command} ml How are you?
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        m.reply('*😽 Successfully Translated From ${lang} to ${text} 😽\n\n ```' + result[0] + '```')
    }

}
handler.command = /^(tr?t|translate)$/i
handler.register = true
handler.limit = false
handler.fail = null
handler.exp = 0
module.exports = handler
