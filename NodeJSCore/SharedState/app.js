//當module object被呼叫時會被cache住,並任何地方的module呼叫時,都會在記憶體中共用同一個object

var sharedfoo = require('./SharedFoo');
console.log('initial something:',sharedfoo.something);//123

//Now modify something
sharedfoo.something=456;

//Now load SharedBar.js
var sharedbar = require('./SharedBar');