const AppStage = {
  debug: "debug_stage",
  prod: "prod_stage",
};
let _stage = AppStage.debug;

module.exports = {
  setAppStage: (stage) => {
    _stage = stage;
  },
  getAppStage: () => _stage,
  AppStage,
};
