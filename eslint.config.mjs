import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    '**/*.bundled.js',
    'tmp'
  ],
  test: [
    'test/**/*.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // lib
  ...bpmnIoPlugin.configs.node.map(config => {

    return {
      ...config,
      ignores: files.test
    };
  }),

  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {

    return {
      ...config,
      files: files.test,
    };
  })
];