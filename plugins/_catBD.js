let handler = m => m

handler.all = async function (m) {

let date = 'Enter developed Date here'
let name = this.getName(m.sender)
let d = new Date()
let [varsham, masam, thiyathi] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let ageD = new Date(d - date)
let age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
let birthday = [varsham + (+ new Date(1970, bulan - 1, tanggal) > + new Date(1970, birth[1] - 1, birth[2])), ...birth.slice(1)]

     if (masam === birth[1] && thiyathi === birth[2]) {
          let chats = this.chats.all()
        for (let id of chats) {
          await this.sendButton(id, `Hi Guys! 😺
     I am very, very happy today. 😻 Do you know the reason? 😼
     Yes, today is my birthday 😽.
     I am ${age} years old now! 😸

     I Heartily Thank you for using me for so long... 😿😽😽😽😽😽
     Use me as you have used me so far. 😻
     If you want to wish me. You can type *'Happy Birthday Cat'* or You can click the button below 😹😹
     `.trim(), `😽`, 'Happy Birthday Cat 😽 May God Bless You! 😽', `,HBDCAT`)

          if (/^.*HBDCAT/i.test(m.text)) {
               m.reply(`*It Warmed my heart! 😸 Thanks a lot ${name} 😽*`)
          } else if (/^.*Happy\birthday\Cat|HBD\Cat/i.test(m.text)) {
               m.reply(`*😽 Thanks a lot ${name} 😽*`
          })
       }
     }
