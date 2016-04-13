
//可將function當作參數,稱作為higherOrderFunction 高階函數

//1
setTimeout(function(){
   console.log('show log after 2 seconds,First'); 
},2000);


//2
function foo() {
    console.log('show log after 2 seconds,Seconds');
}

setTimeout(foo,2000);