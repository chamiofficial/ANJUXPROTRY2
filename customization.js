const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  BOTNAME: "😈 DARKALPHAXTEAM 😈",
  OWNERNAME: "MR.CHAMIYA",
  OWNERNUMBER: "94741230539",
  FOOTER: `> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
    `.trim(),
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `🖥️  *𝙲𝚈𝙱𝙴𝚁-𝚇  𝚂𝚈𝚂𝚃𝙴𝙼  𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽𝚂*  🖥
           🎬  *ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙᴏᴛ*  🎬

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : 📽 DAXT MV DL BOT 📽️ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
        `.trim();
  },
  REACTMENU: "🧚‍𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  SEARCHMENU: "🧚 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  HENTAIMENU: "🧚‍𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  DOWNLOADMENU: "🧚‍𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  MOVIEMENU: "🧚‍𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  GROUPMENU: "🧚‍𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  OWNERMENU: "🧚‍𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  CONVERTMENU: "🧚‍𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  SETTINGSMENU: "🧚‍𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  NSFWMENU: "🧚‍𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  MAINMENU: "🧚‍𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵",
  FUNMENU: "🧚‍𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  AIMENU: "🧚‍𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  LOGOMENU: "🧚‍𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  USEFULLMENU: "🧚‍𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  //=====================menu-img's================================
  ALLMENUIMG: "./src/media/LOGOS/allmenu.jpg",
  REACTMENUIMG: "./src/media/LOGOS/react.jpg",
  SEARCHMENUIMG: "./src/media/LOGOS/search.jpg",
  HENTAIMENUIMG: "./src/media/LOGOS/hentaimenu.jpg",
  DOWNLOADMENUIMG: "./src/media/LOGOS/dl.jpg",
  MOVIEMENUIMG: "./src/media/LOGOS/movie.jpg",
  GROUPMENUIMG: "./src/media/LOGOS/group.jpg",
  OWNERMENUIMG: "./src/media/LOGOS/owner.jpg",
  CONVERTMENUIMG: "./src/media/LOGOS/convert.jpg",
  SETTINGSMENUIMG: "./src/media/LOGOS/settings.jpg",
  NSFWMENUIMG: "./src/media/LOGOS/nsfw.jpg",
  MAINMENUIMG: "./src/media/LOGOS/main.jpg",
  FUNMENUIMG: "./src/media/LOGOS/aifun.jpg",
  AIMENUIMG: "./src/media/LOGOS/ai.jpg",
  LOGOMENUIMG: "./src/media/LOGOS/mokak.jpg",
  USEFULLMENUIMG: "./src/media/LOGOS/useful.jpg",
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *CYBER-X TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 CYBER-X FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 CYBER-X TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "./src/media/LOGOS/alive.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `🖥️  *𝙲𝚈𝙱𝙴𝚁-𝚇  𝚂𝚈𝚂𝚃𝙴𝙼  𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽𝚂*  🖥
           🎬  *ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙᴏᴛ*  🎬


┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : 📽 DAXT MV DL BOT 📽️ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `

☘️ *_𝗧ɪᴛʟᴇ : ${movieData.title}_*
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${movieData.metadata?.runtime || "𝙽/𝙰"}

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

*𝙹𝙾𝙸𝙽 𝚄𝚂 ➟* https://chat.whatsapp.com/HZREbJpQAaR9B2BjTQ6Oyt

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `

☘️ *_𝗧ɪᴛʟᴇ : ${title}_
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"}

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

*𝙹𝙾𝙸𝙽 𝚄𝚂 ➟* https://chat.whatsapp.com/HZREbJpQAaR9B2BjTQ6Oyt

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*` .trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `'
📺 *𝚃𝚅 𝚂𝚑𝚘𝚠:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝙴𝚙𝚒𝚜𝚘𝚍𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝙳𝚊𝚝𝚎:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
✨ *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.releaseDate}
🌐 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
    
🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `

✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `

🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
    
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  MVINFOCAPTION: "➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n*𝙹𝙾𝙸𝙽 𝚄𝚂 ➟* https://chat.whatsapp.com/HZREbJpQAaR9B2BjTQ6Oyt\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*\n\n",
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ*
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

> *ＤＡＲＫＡＬＰＨＡＸＴＥＡＭ* 
        `.trim();
  },
};
