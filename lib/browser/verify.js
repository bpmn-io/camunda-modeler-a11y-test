import { expectToBeAccessible } from '@bpmn-io/a11y';

async function verify() {
  try {
    await expectToBeAccessible('html');

    return {
      success: true
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error,
      actual: error.actual
    };
  }
}

// eslint-disable-next-line no-undef
window.verify = verify;
