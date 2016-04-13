
//require module
var objF =require('./objFactoryFoo');

//create a new object   
var obj=objF();

//use it
console.log(obj.something);

//嘗試在重新共用同一個module,看是否為同一個實體
var a = require('./objFactoryBar');


