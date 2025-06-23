//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJiKzJ6Unl6U3Q5QnpHUnZlN041YnNmZFNlSXFNaFdKamROOHdzOThWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEtUOHdwU25PbHArT3hxakFRcTlZbWdjNWJIeWtUWjlyOEcydnlFQS9EVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UFp1VjVHOWsyQzZVejJ1VWZmekpBd3N2eERHOWhHZVhmSGNDR05XUmtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvU0svRVhPOGkwTmc5RzE5SlR3R0dndWp1S3U4MHZzYUhDWUdOQXFCbTNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCUzRGczhBM1haOWttRHY5bUhEVVBYcUt5dnl3RDFyZm9kdElhdG95M3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPVE5nWlZSMkNMbndodHpPM3U3NnduRDVpQlJtd3pUeWNiYmdJaG9QWDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUE2cU1rWW4rZXBlUUFRLy9QWnVpQ3pKM1Rac1RURzU1OGJkaWhZWWxsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk40SVJJVGthaEI5TjE1WTM5ZVJSNzRnV1F0NkxhcExqYkRUWUozaDFTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVQWxZN3daaFpiTEZPSWdadGZLMUFsV0l3NjBpc0hTUDZLRFBsUzlERk5xWWlvbEdjRFllcGlvYUlFOVBHZzRPMG1xQzJGS0UzRFZNbnR3L3VuOGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiIwa0xZdGNpM2dLT3M2QmJGTkNaOU5mdFA1MXZnbUFNd1RGZDJyOXJOK0dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBcmFjY01JN1JJbXpFUkhOTm1iU2F3IiwicGhvbmVJZCI6Ijg5OTQwMWYzLWRkZDktNDljOC05NGJiLTNkZWMwZTRhZWZmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSXFPMUsrelJ0QVJTZWVRY3JnSzBTTno2aTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHlldEdhTGRSK1dWWCtvR0s2MkFsOWFHVlpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJWMkJTUVhZIiwibWUiOnsiaWQiOiI5NDc4ODc0OTc0MTozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxMDExNDcxNTg4OTgwNjozN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hNjNLd0dFUG5WNHNJR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRwcFpMdG9seGVPdnk3aW9ZZVV0aUVTc1Vyc0UrdE1YL242cGQ5MG0veDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh5UnVFWmZnM3lBeW9aZCtJeStvWjhHK0Ztbzlhc2kxcGF3YW0vTm9mMHBJRzFRZXEwQk1ZcytnakZsUkNQd0tRZ2haYjhzMUhKaTVCVWxnT1NoYkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYTDJvelJ4NHJiNVdmYjB2V28rQVJFTDVIYWxsaWo0TG1HNEhCSG8zSlIvbnFNVklaV2FlWjA4R2hXbWNMYkNwdVoyeHJ0aGErSHBvWCtxSmdxZ3lndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4NzQ5NzQxOjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhhYVdTN2FKY1hqcjh1NHFHSGxMWWhFckZLN0JQclRGLzUrcVhmZEp2OGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDY0MTQxNSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEU0UifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94788749741",
  PASSWORD: 
    process.env.PASSWORD || "Hashi2001",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94741230539", "94741402978"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
