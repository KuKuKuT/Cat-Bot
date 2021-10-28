const axios = require("axios");

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (/image/.test(mime)) {
    let img = await q.download();
    let imgbase64 = img.toString("base64");
    let data = await axios.post(
      "https://salisganteng.pythonanywhere.com/api/remove-bg",
      {
        "api-key": "salisheker",
        image: imgbase64,
      }
    );
    await conn.sendFile(m.chat, data.data.image, "", `*😽 ${global.tnx} 😽*`, m, false);
  } else throw `*You must reply to an image! 😿*`;
};
handler.command = /^(rbg|removebg)$/i;
handler.register = true;

module.exports = handler;
