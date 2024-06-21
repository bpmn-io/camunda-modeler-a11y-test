const path = require('node:path');

const { createModeler, expectToBeAccessible } = require('../helper');


describe('quickstart', function() {

  it('should be accessible (create new)', async function() {

    // given
    const config = path.join(__dirname, './fixtures/user-data/quickstart_large_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths: [], configPath: config });

    // when
    await modeler.click('[title="Create new ..."]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (start event)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/quickstart/step1.1.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/quickstart_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="StartEvent_1"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (replace menu)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/quickstart/step1.2.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/quickstart_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="serviceTask1"]');
    await modeler.click('[data-action="replace"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (general group)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/quickstart/step1.3.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/quickstart_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="endEvent1"]');

    await modeler.click('[data-group-id="group-general"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (service task)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/quickstart/step1.3.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/quickstart_no_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="serviceTask1"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (deployment)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/quickstart/step1.3.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/quickstart_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('button[title="Deploy current diagram"]');
    await modeler.waitForExist('#deployment\\.name');

    // then
    await expectToBeAccessible(modeler);
  });
});
