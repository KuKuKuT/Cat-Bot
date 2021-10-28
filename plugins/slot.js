let handler = async (m, { args, usedPrefix, command }) => {
    let fa = `*You must enter a xp count to bet! 😿*

😸 Example:
${usedPrefix + command} 100 

*😺 About Game!*

You can bet with XP. The above examples
shows that You are betting with 100 XP.
You can bet with any count of XP.

*JACKPOT:* Your bet will doubled ( 3 emojis as same )
*Just Pass:* Your bet +1 XP ( 2 emojis as same )
*Lose:* Your betted XP will lose. ( 0 emojis as same )`.trim()

    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let betJID = await conn.getName(m.sender)
    let taruhan = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 10000
    if (new Date - users.lastslot < 10000) throw `tunggu selama ${msToTime(time - new Date())}`
    if (taruhan < 1) throw '*Count is too low! Minimum 1 XP 😿*'
    if (users.exp < taruhan) {
        throw `*You don't have ${args[0]} XP! 😿*\nType *${usedPrefix}achivement* to see your XP Count! 😺`
    }

    let emojis = ["😉", "☺️", "😇"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `JACKPOT! 😽\nYou Got : *+${taruhan + taruhan} XP*`
        users.exp += taruhan
    } else if (a == b || a == c || b == c) {
        end = `Just Pass 🙀\nYou Got : *+1 XP*`
        users.exp += 1
    } else {
        end = `Lose 😿\nYou Got : *-${taruhan} XP*`
        users.exp -= taruhan
    }
    let footer;
    if (end.includes('JACKPOT')) {
        footer = `OMG! 🙀 Well Done @${betJID} ! Click the below button and Bet Again 😼`
    } else if (end.includes('Just Pass')) {
        footer = `Better Play @${betJID} ! 😺 Click the below button and bet again and win JACKPOT 😽`
    } else {
        footer = `No Problem 😿 Don't Give Up @${betJID} ! 😼 Click the below button and bet again win JACKPOT 😽`
    }
    users.lastslot = new Date * 1
    return await conn.send2Button(m.chat,
        `*[ 🎰 | SLOTS ]*

${end}

${x[0]} ${y[0]} ${z[0]}
${x[1]} ${y[1]} ${z[1]}
${x[2]} ${y[2]} ${z[2]}`.trim(), `${footer}`, `Slot ${args[0] + 50}`, `${usedPrefix}slot ${args[0] + 50}`, `Slot ${args[0]}`, `${usedPrefix}slot ${args[0]}`, m)
}
handler.command = /^(slots?)$/i
handler.register = true

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}
