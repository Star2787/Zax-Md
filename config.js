const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://echo_javx_user:OmmkSICb42IvTm9N8bLrdDT8MwGKHPa7@dpg-cs9n0h3qf0us739j1grg-a.oregon-postgres.render.com/echo_javx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "254794064557";
global.sudo = process.env.SUDO || "254794064557";
global.owner = process.env.OWNER_NUMBER || "254794064557";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0w4K2lvNWljY1BxSzAyQi9mMGI1NFVlQVFxNjA1TnRnOTlsZUNUTG4wST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVVMTBRL0x6QzBRdTNPTkg4a2RVdk4xWk9pd09LWWlhNjZ3eWNxUU0xTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRjhOVHY0azloZUdqMzc1Z2hBam1EbUQ0UkhLRmt6UDE3ODcxSlU2SUdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvT2wyZ0tDZE40RjUvMk92ZFcrRXh2NTl1bXhvVUVOOS9GU0JEUENHT0JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFNnF3L0lscWhnZ25pWnhIQ1ljc3NLTU1Ibk5HR1JJRHpCSHJCZkJwWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZwWjNCMnRTV3p1UmJTK0hPcDdOTFBCTHl0VGk1eFNjdVNYUnBQRU5Oa009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFCM2VXSHF4c0tSSFVRVFlIVnNjRWJqSm9DQ2FVQVlCTHN5NlQ4OW9VWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZEWm5rTjM1bFo0Y29yY0J2MmttOHJqZ09pR0o4WHJUb3FLMmtoZ1N6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRYcEtlMEV4dmRkak8wN0Z6TmNRV0FZcVY4czg1dFg3aTVyZ0JiREVvTE5wZTdya21YS2xtTzhZeVY5VGV4azNQbFk4ZjV6Rm1WaDVhVlp6QXpObUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJlRWpxUmFleTNURkJsc3lBSGxIekdONjZUa2FBK284RG1lTlE0eWJJcjFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2NllfNHhWalRaT1JIOHB0MndacU13IiwicGhvbmVJZCI6IjgxNWRkNGRjLTMyOTAtNDQwNi05MjM1LWUxOWVjOTAyOGNjMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwOG5rQUh0MC9NL1FnZlNja20wMlBmOFRBNGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDdVS1diTmxPR2JQV2dWU091eHpkREVyTk1rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkI2MVoyWUpCIiwibWUiOnsiaWQiOiIyNTQ3OTQwNjQ1NTc6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05pa2d0MERFT1hjejdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjM2SnFFU3VGb3hVcFU4aWc5QVVNQU1PN2hRY1NuSmJhbkE0bVlxeGI1bmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik0vcWtIbTRiekNvd3ZwZCtLeFBrWHpNTkl2M3dkT2c2blJCNmw5d29ZWWlPL3Q3b3RmU0N0cnpUVHdESlJ1YU13TWVZQXpxdUlZQk1JZWRpcVp5SERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuMENrZTJjRmV5Smd6WE80V0hRZkF0dmFoM3JIMEpVWGtxNGVXd25XcTFTTys3V3RHWm83LzRGcVdMS1VxbzYwaUxsRWw0b01JNWlYazVrQmw0cW9BQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NDA2NDU1NzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkK2lhaEVyaGFNVktWUElvUFFGREFERHU0VUhFcHlXMnB3T0ptS3NXK1o0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzU5NDc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVBWSJ9";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "echo",
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
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
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
