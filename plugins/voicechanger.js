const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        let set
        if (args[0] == 'bass' || args[0] == 'Bass' || args[0] == 'BASS') set = '-af equalizer=f=94:width_type=o:width=2:g=30'
        if (args[0] == 'blown' || args[0] == 'Blown' || args[0] == 'BLOWN') set = '-af acrusher=.1:1:64:0:log'
        if (args[0] == 'deep' || args[0] == 'Deep' || args[0] == 'DEEP') set = '-af atempo=4/4,asetrate=44500*2/3'
        if (args[0] == 'earrape' || args[0] == 'Earrape' || args[0] == 'EARRAPE') set = '-af volume=12'
        if (args[0] == 'fast' || args[0] == 'Fast' || args[0] == 'FAST') set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (args[0] == 'fat' || args[0] == 'Fat' || args[0] == 'FAT') set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (args[0] == 'nightcore' || args[0] == 'Nightcore' || args[0] == 'NIGHTCORE') set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (args[0] == 'reverse' || args[0] == 'Reverse' || args[0] == 'REVERSE') set = '-filter_complex "areverse"'
        if (args[0] == 'robot' || args[0] == 'Robot' || args[0] == 'ROBOT') set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (args[0] == 'slow' || args[0] == 'Slow' || args[0] == 'SLOW') set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (args[0] == 'smooth' || args[0] == 'Smooth' || args[0] == 'SMOOTH') set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (args[0] == 'squirrel' || args[0] == 'Squirrel' || args[0] == 'SQUIRREL') set = '-filter:a "atempo=0.5,asetrate=65100"'

        if (!args[0]) throw `*You must enter a voice changer! 😿*

╓───〚 *List Voice Changer* 〛 
║ bass
║ blown
║ deep
║ earrape
║ fast
║ fat
║ nightcore
║ reverse
║ robot
║ slow
║ smooth
║ squirrel
╙───••••───
`
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw global.eror
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, /vn/.test(args[0]), { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else throw `*You must reply to any audio to change voice! 😿*`
    } catch (e) {
        throw e
    }
}
handler.command = /^(voicechanger)$/i
handler.register = true

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
