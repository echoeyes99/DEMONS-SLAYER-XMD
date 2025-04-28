const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_SPARK-X-2025;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZuSkxDQ3ZhUWc3cmUxbEJUcDNIWDNXajZwdU80bll6dUNINlgyaTVrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTNvcEpqTUxqNHBuYmNhcEtLdXI2bHFBS1lCVHk0UzJRRGphUUphc0xSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTldwT1A5em5ab0JpSGROM0VjWEhFQ1NUSVdKclMyaE5nUkxhQ2hKV0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTktGR3l6Ylg3L3JpZEVBTjNDYnB3bUlWN1NnME4veHl4Q1dlWXpjbVFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNNTYzbDlEbGorRFhLVlhRNnhQOS83cVN1MTJ0cSsrRk44WmhROWh0a2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ0ZmZUYkR3eDlNN0VsdmVKTXRWL0EyaDJQc3RkTS9wRXBWRmljTU8vZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lnNFk5N0JUeFRRZUk2RWtyWmVaanBnbktZVEFmS0VFbE91T290d2wwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXBCWEpML3FIdVoyVEpaY2UrUzl4WVVEKzRidkRZM3llb1ZxdDBZK3hEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNIY29DSWxDVHpTZVJzWFN3b0FtYzVCbjJwNkUzek5RSXgrdVQrUzdFUXVYSDJsMEdKbTVEL3NmTmU1MDYzWkc5bTE0T0VUQ2FRejJMc1BXTUV3VEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6Inc1RjB5Z1d1NTRpM040TUwvS2E0dE5nRGdnVGtES1EvL3JRY3JsaVVpM1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MTcxNjQ0OTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkFEODFEOTg4MDZGNDFENzFGNDVGOEM3MjhCMTU3QzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTgzNzA1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MTcxNjQ0OTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUNGODhDMTY0OEYyNTQ0M0MwNDgyMEYwMjhCNzJGNDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTgzNzA4NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTnhmaElOWm5SUXFMSFMzVGNqZ1gwdyIsInBob25lSWQiOiJhZWQwYjJhMC1iODYwLTQzYzItYTNhZS03OGY3NTA2NjlhZTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmkreHFrRldCbXQ0dUlEK05kVmRhNU9iaDhJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVSM0VFbUNhSmRxQ1NNWmJBV3FkSW1zTXpOaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXVEFNS0U4ViIsIm1lIjp7ImlkIjoiMjc3MTcxNjQ0OTQ6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XmPCdl7DwnZe18J2XvPCdl5jwnZiG8J2XsvCdmIAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09hUXFKb0ZFT2EzdmNBR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFxamYvZXhBekk4TWE1MFJGcXlIYWxsSDJqMDJCbnBiQmNMWVpmSmdTUms9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJwaVVLdUR6dTVsaDN5eGIrZVF0MEt4dkNYZlJpSlFoS0Y1YUdzczVpamx5bmExVFNsclQ2YlV2SUpxU1NkVzdoVzR4cWJiaW1XUzEzS3BIUCtNQUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIbTVIanZlcXZRZ1E2bXp2WFdQbGh4eW1rSU5KRGk3T283TTdseC9neklqMkdmRjhTWk1PUnVUNUMxRlpEKzZGd24wdmdWNU1SMm41ei9DM0t0VDdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzE3MTY0NDk0OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldxbzMvM3NRTXlQREd1ZEVSYXNoMnBaUjlvOU5nWjZXd1hDMkdYeVlFa1oifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU4MzcwNDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1VkIn0=|| "Demon-Slayer~WZj0KrAR",
  PREFIX: process.env.PREFIX || '.',
  //let's add menu captions by lord joel
  BOT_NAME: process.env.BOT_NAME || "Demon Slayer",
  CAPTION: process.env.CAPTION || "> *ᴍᴀᴅᴇ ʙʏ ᴄʀᴇᴡ sʟᴀʏᴇʀ*",
  // don't use my codes without a permission 🙏
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'true' : false,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '🫨', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status viewed',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Marisel",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "218942841878",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "254740007567",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
};

// Debugging: Log the AUTO_BIO value to ensure it's set correctly
console.log("AUTO_BIO from .env:", process.env.AUTO_BIO);
console.log("AUTO_BIO in config:", config.AUTO_BIO);

module.exports = config;
