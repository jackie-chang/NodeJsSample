//require module
var objF = require('./objFactoryFoo')
//create new object
var objA=objF();
console.log(objF().something); //123  
objA.something=456;
console.log('objA :' + objA.something ); //456
objA=objF();
console.log(objF().something);
console.log(objA.something);//123
