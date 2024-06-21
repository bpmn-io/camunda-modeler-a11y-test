# camunda-modeler-a11y-test

Test accessibility of the [Camunda Modeler](https://github.com/camunda/camunda-modeler).

## Usage

Use this repo to test accessibility of the Camunda Modeler.

First, you need to clone this repository and install the dependencies:

```sh
git clone git@github.com:camunda/camunda-modeler-a11y-test.git
cd camunda-modeler-a11y-test
npm install
```

This will download the latest release. You can specify the version via environment variable `VERSION`:

```sh
VERSION=5.23.0 npm install
```

Run tests:

```sh
npm run start
```

If you want to inspect a single test, change the method to `it.only`, and run the tests with `NO_CLEANUP` variable set. This will prevent closing of the application after the test:

```sh
NO_CLEANUP=1 npm start
```

## License

MIT
