let handler = m => m

handler.all = async function (m) {

let date = '2021 11 8'
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
          await this.sendButton(id, `Hi Guys! πΊ
     I am very, very happy today. π» Do you know the reason? πΌ
     Yes, today is my birthday π½.
     I am ${age} years old now! πΈ

     I Heartily Thank you for using me for so long... πΏπ½π½π½π½π½
     Use me as you have used me so far. π»
     If you want to wish me. You can type *'Happy Birthday Cat'* or You can click the button below πΉπΉ
     `.trim(), `π½`, 'Happy Birthday Cat π½ May God Bless You! π½', `,HBDCAT`)

          if (/^.*HBDCAT/i.test(m.text)) {
               m.reply(`*It Warmed my heart! πΈ Thanks a lot ${name} π½*`)
          } else if (/^.*Happy\birthday\Cat|HBD\Cat/i.test(m.text)) {
               m.reply(`*π½ Thanks a lot ${name} π½*`)
          }
       }
     }
