const path = require('node:path');

const { createModeler, expectToBeAccessible } = require('../helper');


describe('webapps', function() {

  it('should be accessible (properties panel C7)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/invoice.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/large_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="approveInvoice"]');

    await modeler.click('[title="General"]');
    await modeler.click('[title="Documentation"]');
    await modeler.click('[title="User assignment"]');
    await modeler.click('[title="Asynchronous continuations"]');

    // then
    await expectToBeAccessible(modeler);
  });
});
