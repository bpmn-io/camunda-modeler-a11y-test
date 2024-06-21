const path = require('path');
const fs = require('node:fs');
const { expect } = require('chai');

const _createModeler = require('../lib/helper/createModeler');

let MODELER = null;

!process.env.NO_CLEANUP && afterEach(cleanUp);

async function cleanUp() {
  if (MODELER) {
    await MODELER.close();
    MODELER = null;
  }
}

async function createModeler(...args) {
  await cleanUp();
  MODELER = await _createModeler(...args);

  return MODELER;
}

/**
 *
 * @param {ReturnType<typeof _createModeler>} modeler
 */
async function expectToBeAccessible(modeler) {
  const script = fs.readFileSync(path.join(__dirname, '../lib/browser/verify.bundled.js'), 'utf8');

  const fn = `(function() {
  ${script}
  return window.verify();
})()`;

  const result = await modeler.executeJavaScript(fn);

  if (!result.success) {
    console.dir(result.error);
    console.dir(result.actual);
  }

  expect(result.success).to.be.true;
}

module.exports = {
  expectToBeAccessible,
  createModeler
};
