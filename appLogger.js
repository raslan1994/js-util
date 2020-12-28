const { getAppStage, AppStage } = require("./appStage");

const LogLevel = {
  debug: "debug",
  error: "error",
  info: "info",
};

const writeLogTag = (tag) => `[${tag}] -> `;

function writeLog(tag, data, level = LogLevel.debug) {
  const appStage = getAppStage();
  if (level === LogLevel.debug && appStage === AppStage.debug) {
    console.log(writeLogTag(tag), data);
  } else if (level === LogLevel.error && appStage === AppStage.debug) {
    console.error(writeLogTag(tag), data);
  } else {
    console.log(writeLogTag(tag), data);
  }
}

module.exports = { LogLevel, writeLog };
