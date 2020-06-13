const APP_STAGE = {
  debug: "debug_stage",
  prod: "prod_stage",
};
let _stage = APP_STAGE.debug;

module.exports = {
  setAppStage: (stage) => {
    _stage = stage;
  },
  getAppStage: () => _stage,
  APP_STAGE,
};
