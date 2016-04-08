//first simulateUserClick Sample

function longRunningOperation(callback) {
    setTimeout(callback,3000);
}

function userClicked() {
    console.log('starting a long operation');
    longRunningOperation(function () {
        console.log('ending a long operation');
    });
}

userClicked();

//first simulateUserClick Sample2
//It's important !

function longRunningOperation2(callback) {
    setTimeout(callback,3000);
}

function userClicked2(request) {
    console.log('starting a long operation '+request.id);
    console.log('');
    longRunningOperation2(function () {
        console.log('ending a long operation '+request.id);
        console.log('');
    })
}

userClicked2({id:'test1'});
userClicked2({id:'test2'});