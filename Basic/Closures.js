//first Closures exsample
//目的不建立外部變數,不讓任何可能因素改變外部變數
//所以用此方法去封閉變數,確保變數不變
function outerFunction(arg) {
    var variableInOuterFunction=arg;
    
    function bar() {
        console.log(variableInOuterFunction);
    }
    
    bar();
}
outerFunction('hello closure!');

//second Closures exsample
//也可以把function丟給外部變數
function outerFunction2(arg) {
    var variableInOuterFunction=arg;
    return function () {
        console.log(variableInOuterFunction);
    }    
}

var innerFunction = outerFunction2('hello closure2!');

innerFunction();