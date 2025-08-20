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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0QwMFJRSzVNbllvNldBZ05YUUEvUzVWY1V1cGlTUHVlYXlDMHpJcXBHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2F2b3M2RzhCbXR6cUNNNU9Rb2M1Q0psTDMvYk1LYWgzOHdjbkYvRVNraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS09iR3JOZ1M1N05yNnkraDJqNmdla0F5VTJQVWppc1VQdXRVL1kyVm53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWCt0WkhyWlcyTjRqVlR4RzNEVXFEUVNvV3AwT3dVN2ZoQ1VSbGtydUM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIZHZ2aDFuTUkxNjcwaGh1NTU5ZHY0ZFV0SDNMNWJNdTFpaGRuZ2pibDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcyRFlZTXp5V1lFanZUR0ZPeHltMHJuRS8rL3BFREdDUGZxWmlSNDNzMHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJ0cEhmUEFNL2pONXNGcTVtNHZrd0FDcXlEUkYrNk8rZXRKTVdhR1Zrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFo4RFE2TTVwWUNkR2hqRzJCYWJLdEVwVFVZT3VKLzVOUkY2Y3h2cEowVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii93cTZGSlVER095MG55dDEvRGF1UmRYWGkzZEw2aXpWL1A3TWpEVzkrYlZrNEJ3WlB4RXhjZVl5N2VsUTVpdmpqUlF0TFplZ2pWSFpSaTM4N3hVRmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJneklqT3gvVmw1TlBVYUVTTjVMQm5KRFQvbzVXVEFQWDdBbUZIN2sxMXd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOV3hHWF9rOFNxeUs2bDV1NHp6c3hnIiwicGhvbmVJZCI6IjZlNTE3ODBlLTljMDgtNDM1ZS04NmVmLTFlM2NkYzAyZWY0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOdEROM0lzSzgzY0FmNCtlYytMbTZicFdYQWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJsaCtJSERMb1grOCtRaUIyMGJiQ2lYY084PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVEQTVLQ0g0IiwibWUiOnsiaWQiOiI5NDc0MTQwMjk3ODoxNUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzNjgwODIzMDg2MzA0NDoxNUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096Q3o1VUhFT3VLa3NVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldmendSSVVLUk4vSXU2QlF6Z0g3RlVlZWlnNjA1djdBZVFoTTBpZXZVaWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFJblo4NmFHb0s3a0tZNU9IZ1g1Z1M2c1MyKy9kRTR2TXdlWThwV0hOUm8xRXQ3WUFrLzZtV1I5YWpNQXBUdHhJMWU4WmZFbzdVamxaY3ZVWnY5K0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJacTlQRGtBV0pENDcvV1QxQzJkMTJsZnd4NTdqY0Q2dHV0dnNjRjE2VkRxUzBwTEVtYjJkbVVBNGNabXdvN1BmMENTenEyZ3cvTzFkeFYzOVJhd1FnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQxNDAyOTc4OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZuODhFU0ZDa1RmeUx1Z1VNNEIreFZIbm9vT3RPYit3SGtJVE5JbnIxSXAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVVFBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTYxMjUzNywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEYVUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741402978",
  PASSWORD: 
    process.env.PASSWORD || "chamianju",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94775512050", "94741230539"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
