const path = require('node:path');

const { createModeler, expectToBeAccessible } = require('../helper');


describe('user guide', function() {

  it('should be accessible (forms group)', async function() {
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/show_form.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/large_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    await modeler.click('[data-element-id="Activity_0qkkllp"]');

    await modeler.click('[title="Forms"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (inputs and outputs)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/show_form.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/large_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[data-element-id="Activity_0qkkllp"]');

    await modeler.click('[title="Inputs"]');
    await modeler.click('[title="formKeyA"]');

    await modeler.click('[title="Outputs"]');
    await modeler.click('[title="myProcessVariableName"]');

    // then
    await expectToBeAccessible(modeler);
  });


  it('should be accessible (deployment C7)', async function() {

    // given
    const diagramPaths = [ path.join(__dirname, './fixtures/bpmn/show_form.bpmn') ],
          config = path.join(__dirname, './fixtures/user-data/large_with_prop_panel.json');

    const modeler = await createModeler({ diagramPaths, configPath: config });

    // when
    await modeler.click('[title="Deploy current diagram"]');

    await modeler.waitForExist('[for="deployment.attachments"]');

    // then
    await expectToBeAccessible(modeler);
  });
});
