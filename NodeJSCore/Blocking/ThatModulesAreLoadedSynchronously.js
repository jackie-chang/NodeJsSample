//Blocks execution until module is loaded

var foo = require('../Exports/foo');

//Continue execution after it is loaded
console.log('loaded foo');
foo();