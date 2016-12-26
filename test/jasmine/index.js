// single entry point is created for all specs

var testsContext = require.context('.', true, /_spec$/);
testsContext.keys().forEach(testsContext);