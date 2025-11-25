const { cleanUpModeler } = require('./helper');

module.exports.mochaHooks = {
  async afterEach() {
    process.env.NO_CLEANUP || await cleanUpModeler();
  }
};
