var foo = [];

foo.push(1);

getArrayItems(foo);//1

foo.push(2);

getArrayItems(foo);//1 2

<<<<<<< HEAD
foo.unshift(3);
=======
foo.unshift(4);
>>>>>>> 6b511b34f6b486ceee29c3303d4b994a196bf0b1

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

