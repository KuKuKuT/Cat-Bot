const tesseract = require("node-tesseract-ocr");

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `*You must reply to an image! 😿*`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*Mime ${mime} is not supported! 😿*`;
  let img = await q.download();

  tesseract
    .recognize(img, {})
    .then((text) => {
      m.reply('```😽 Here is What I have Read :```\n*'+text+'*');
    })
    .catch((error) => {
      console.log(error.message);
      throw global.eror
    });
};
handler.command = /^ocr$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;
