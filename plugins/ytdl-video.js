const config = require('../config');
const { cmd } = require('../command');
const yts = require('yt-search');
const url = require('url');

cmd({
  pattern: "video2",
  alias: ["mp4", "song"],
  react: "",
  desc: "Download video from YouTube",
  category: "download",
  use: ".video <query or url>",
  filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
  try {
    if (!q) return await reply("Please provide a video name or YouTube URL!");

    let videoUrl, title;

    // Check if it's a URL
    const parsedUrl = url.parse(q);
    if (parsedUrl.hostname && (parsedUrl.hostname.includes('youtube.com') || parsedUrl.hostname.includes('youtu.be'))) {
      videoUrl = q;
      const videoInfo = await yts({ videoId: q.split(/[=/]/).pop() });
      title = videoInfo.title;
    } else {
      // Search YouTube
      const search = await yts(q);
      if (!search.videos.length) return await reply("No results found!");
      videoUrl = search.videos[0].url;
      title = search.videos[0].title;
    }

    await reply("Downloading video...");

    // Use API to get video
    const apiUrl = `https:                                                                                
    const response = await fetch(apiUrl, { timeout: 15000 });               
    const data = await response.json();

    if (!data.success) return await reply("Failed to download video!");

    await conn.sendMessage(from, {
      video: { url: data.result.download_url },
      mimetype: 'video/mp4',
      caption: `//apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
    const response = await fetch(apiUrl, { timeout: 15000 }); // 15s timeout
    const data = await response.json();

    if (!data.success) return await reply("Failed to download video!");

    await conn.sendMessage(from, {
      video: { url: data.result.download_url },
      mimetype: 'video/mp4',
      caption: `*${title}*`
    }, { quoted: mek });

    await reply(`*${title}* downloaded successfully!`);
  } catch (error) {
    console.error(error);
    await reply(`Error: ${error.message}`);
  }
});
