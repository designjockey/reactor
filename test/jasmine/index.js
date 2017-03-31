// single entry point is created for all specs

const testsContext = require.context('.', true, /_spec$/);
testsContext.keys().forEach(testsContext);
