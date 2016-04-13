var t1 = new Date().getTime();
var foo1 = require('../Exports/foo');
console.log(new Date().getTime()-t1); //>0

//會因為之前有呼叫過,所以會將呼叫過得require(filePath)cache住
var t2 = new Date().getTime();
var foo2 = require('../Exports/foo');
console.log('test');
console.log(new Date().getTime() - t2);
