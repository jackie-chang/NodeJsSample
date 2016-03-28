var foo={};
console.log(foo); //{}

foo.test=1234
console.log(foo);//{ test:1234 }

//***********************************************************************

var qoo={
    hi:1234
};

console.log(qoo); //{ hi: 1234 }

var coo={
    hello:1234,
    woo:{
        a:1,
        b:2
    }
}
console.log(coo); //{ hello: 1234, woo: { a: 1, b: 2 } }

