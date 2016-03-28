var foo = [];

foo.push(1);

getArrayItems(foo);//1

foo.push(2);

getArrayItems(foo);//1 2

foo.unshift(4);

getArrayItems(foo);//3 1 2 

foo.unshift(4);

getArrayItems(foo); // 4 3 1 2



function getArrayItems(arrayObject) {
    var answer="";
    arrayObject.forEach(function(element) {
        answer+=' '+element;
    }, this);
    console.log(answer);
};

