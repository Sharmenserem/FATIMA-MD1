const config = require('../config');
const { cmd } = require('../command');
const DY_SCRAP = require('@dark-yasiya/scrap');
const dy_scrap = new DY_SCRAP();

function replaceYouTubeID(url) {
  // ...
}

cmd({
  pattern: "play3",
  alias: ["mp3", "ytmp3"],
  react: "",
  desc: "Download Ytmp3",
  category: "download",
  use: ".song <Text or YT URL>",
  filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
  try {
    // ...

    const sentMsg = await conn.sendMessage(from, {
      image: { url: image },
      caption: info
    }, { quoted: mek });

    const messageID = sentMsg.key.id;

    // Use a more robust way to handle user replies
    const replyHandler = async (messageUpdate) => {
      try {
        // ...
      } catch (error) {
        console.error(error);
        await reply(`An error occurred while processing: ${error.message || "Error!"}`);
      }
    };

    conn.ev.once('messages.upsert', replyHandler);
  } catch (error) {
    console.error(error);
    await conn.sendMessage(from, { react: { text: '', key: mek.key } });
    await reply(`An error occurred: ${error.message || "Error!"}`);
  }
});
