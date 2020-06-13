const { getAppStage, APP_STAGE } = require("./appStage");

const LOG_LEVEL = {
  debug: "debug",
  error: "error",
  info: "info",
};

const writeLogTag = (tag) => `[${tag}] -> `;

function writeLog(tag, data, level = LOG_LEVEL.debug) {
  const appStage = getAppStage();
  if (level === LOG_LEVEL.debug && appStage === APP_STAGE.debug) {
    console.log(writeLogTag(tag), data);
  } else if (level === LOG_LEVEL.error && appStage === APP_STAGE.debug) {
    console.error(writeLogTag(tag), data);
  } else {
    console.log(writeLogTag(tag), data);
  }
}

export { LOG_LEVEL, writeLog };
