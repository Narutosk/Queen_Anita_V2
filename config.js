//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "918389815115";
global.owner = process.env.OWNER_NUMBER || "918389815115";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdUTTJsY1ZPZjlhTHRpOUpUaW5VTTVzWnhtd3NwcXNCaUJCdjN5aUlVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTcrWm9UbVdvYk9xLzZrNlVVZ1NJcGFVaUhqNVF4MUEzcTB3TFo5UHVFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTmVpVEFXSHR5Q2JWMjJtOTJTQjZKcVN1ZXJzTGFDa2YrQld3WlVUWW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzLzNJVFN5YjFRUkFwZnZ2UDJMRDRQWmlsSEVIM3RpMnliTlBhMDZJcHhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLZTJ6VHF0Z095T3F1Y0tQOTFodGNHMDRySmZJa2FtdHpXY083QkUrM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU2Y091ZnM1UVFPV1JVNkQzSm1BQWFjQlp3cXJ6ejkzUU5WcGRralZHVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xRTEh3NE1RNHZQK2JEd3dEU3AzbnJ2MXNVaXNjeDJsTlA1anBQWVkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNC9TV0FaN21meW1EeXNvUDh6NUJWNWk4Y3QyUmlUbU1RWG14ZVFGRkxuST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNSMENTN0FZc3RnMEZFbnJaeEpmdVptT3A4OTkzRlpXUmI2MGkzODRTd0lmeEI4M2E2WTRLbkRQZUM4TUNBV3FmNkJadjdNV05iclk4LzJXYjRCcWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJpVHdKb0hqQkcyeFBaSlhaaStacnlSeEpVaHF0L2VYUktna0k1OFpZOG13PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODM4OTgxNTExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MTZGRUM0QUI4QjhFQTYyOTU1OTlENkY2OUMyNEQ3NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5NDg3ODQzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUd1JQeGY2TFF1eU5USXppeUdoOEl3IiwicGhvbmVJZCI6IjVlNGMxYzEyLWQ1NWQtNDQxMi05NzhiLTIwZGE5MmY1ZTI3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoTWtpWloxZkk0aEl2djdGd2djWUVvQ1RlNFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3kxZFRqcUp0REtBdDRNVm1qdWxKQ3hkY1VBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNaNTVQVExMIiwibWUiOnsiaWQiOiI5MTgzODk4MTUxMTU6ODhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042RnhzQURFTlAwdWIwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVXdjJ4bkVxVDNmSDNWcGlpYVowTzU5dUtzOERKZG81NG4zN3Zicmp0Vlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilc0Q3ZtOU1TTTFmWWxhN0JOUlBKc1c4WlpIUmw5TlRDekF5UmNyQmg0YmJVc0FRWDh3S3cwcVRIWHBPRUU5eVBwNzdmV205VE4xdXg2aTFlYThNNUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkSzhFRnNhSnU2eUZHZUlvZUEreUQzT2Q2aUR5aVdMZTVkQzdWMStkaEJ2eklOUjlWYWY0VHRjZ2ZFSm0xZHVNaU1EOFVGZHdpMUJWN3lXaWZRQUNqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODM4OTgxNTExNTo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVnI5c1p4S2s5M3g5MWFZb21tZER1ZmJpclBBeVhhT2VKOSs3MjY0N1ZXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NDg3ODQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMvSCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
