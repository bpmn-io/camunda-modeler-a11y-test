const path = require('node:path');

const { createModeler, expectToBeAccessible } = require('../helper');


describe('dmn', function() {

  it('should be accessible (drd)', async function() {

    // given
    const config = path.join(__dirname, './fixtures/user-data/dmn.json'),
          diagramPaths = [ path.join(__dirname, './fixtures/dmn/step4.2.dmn') ];

    // when
    const modeler = await createModeler({ diagramPaths, configPath: config });

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (decision table)', async function() {

    // given
    const config = path.join(__dirname, './fixtures/user-data/dmn.json'),
          diagramPaths = [ path.join(__dirname, './fixtures/dmn/step4.2.dmn') ];


    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('.dmn-icon-decision-table');

    // then
    await expectToBeAccessible(modeler);
  });
});
