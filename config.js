//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "916282524936";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "916282524936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "avaliable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZaRmpkZDROaEhySnAzMERGRVN4OUlFSnh0cVp5V0NvQmwxMnN0MFdGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnhZcVJVZ2Q2RW8rODFLN04xTGZTUGMwSHlnTDVMNU1tS09hL2hYd3hsaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQlo3aWdpcWRYaExZVUJxS25lcUZnNTNhTm5JeFNXVWVQU0V5OTdQWTBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWlNSbjJBZVc5bU4yVGJBRElwZHFTb1A4MTFaZndWajdtUE5BL3gwR3pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9DeEpYcVhvYUxpTXhMOGFjMjRCTFFiUVMwR2ZvQTZ1TSswZ3FsdG90bkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLOVBGbHNTb3d3YkdMSGtvaTZSU0R1NXduNm1SNU4xWTEzaDNRbEtJdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJMNFhGeXJKN3Rrb0FHNWY0emdiMGU2RGdBQXdyMGFOTVRvVUYwaEQxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1R0Y0NmZUE4SUJIRjFLRk1XaUl2OFZ0ZmFSOTFUMkFwMmNJRVhsOE5HWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE3ZFJGcGM3SWZZNG8rSFdxMDlUcjA3T0UyOE1JbUcrb3QxcWJrbGZQTkJNOHBhRlY1dFRsK3JscWtRM2hNZHlDMlJ5VlRhTU50VkJYSWc3T2pjTmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJUODcwQXBCZzhvdWpLK2N5NFJEaEtBcmdYcW1XWU10VENRayttd3NHMmFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfeFNmTDd2VlFENjB0VmhUVmdyMFhBIiwicGhvbmVJZCI6IjVlYmI4ZTc2LTdiOWItNDRlYS04ZjUxLTY3MmFkZGI4ZDg5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOVVuTFFpODM0dVhVTllEOFFmYWJhTmp1OFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVQUTBlaEdPVmJrcWdKNy9oeWttb0Q0Y2RZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllYOUw0QVNFIiwibWUiOnsiaWQiOiI5MTYyODI1MjQ5MzY6NTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYWNodSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEt3b1pjSEVQNzJ6clFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2lLcFY2K0RFQXk3RExnc0I2clJJRmU3L2oxTThRYjFDSngvR3pncVNuZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkZMY0dDdlhnT04yWmxaOC9BWnBURVhVRUxpR2cvRGZ4clQ0N2lQaWVBcFlJdUlaVHFxWW9mQ3NubVh5MlZ3OVpyclVPT3dETVN5dzR4b21waGlGQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBsaFFLRWVJSDZOMU5PQUZIak1TcWw3KzJVY1dSQzFKc0hhNnJkdHZQU3ZoZExpNVV1Tmtoa3FweW9LZ2pzSjg0L1ZEZzVEeXAxamh1VVJYdERjb2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjgyNTI0OTM2OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVvaXFWZXZneEFNdXd5NExBZXEwU0JYdS80OVRQRUc5UWljZnhzNEtrcDQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5NTc4MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVJPIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "-𝐁𝐘-ACHU-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "ACHU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ACHU 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "9478995822",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
