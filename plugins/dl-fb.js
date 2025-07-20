const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename,
  use: "<Facebook URL>",
}, async (conn, m, store, { from, args, q, reply }) => {
  try {
    if (!q || !q.startsWith("http")) {
      return reply("*Need a valid Facebook URL*\n\nExample: `.fb https:                          
    }

    await conn.sendMessage(from, { react: { text: '', key: m.key } });

    const apiUrl = `https:                                                                           
    const { data } = await axios.get(apiUrl);

    if (!data.status || !data.data || !data.data.url) {
      return reply("//www.facebook.com/...`");
    }

    await conn.sendMessage(from, { react: { text: '', key: m.key } });

    const apiUrl = `https://www.velyn.biz.id/api/downloader/facebookdl?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data.status || !data.data || !data.data.url) {
      return reply("Failed to fetch the video. Please try another link.");
    }

    const videoUrl = data.data.url;

                                      
    if (!videoUrl.startsWith("// Check if the video URL is valid
    if (!videoUrl.startsWith("http")) {
      return reply("Invalid video URL.");
    }

    await conn.sendMessage(from, {
      video: { url: videoUrl },
      caption: "*Facebook Video Downloaded*\n\n- Powered By Dua Fatima ",
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    reply("Error fetching the video. Please try again.");
  }
});
