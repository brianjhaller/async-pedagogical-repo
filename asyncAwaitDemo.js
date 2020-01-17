async function helloThere () {
    console.log("inside")
    return 1 + 2;
}


console.log("before");
console.log(helloThere() + 4);
console.log("after");




// console.log("before");
// helloThere().then(res => console.log(res + 4))
// console.log("after");


async function pause(t) {
    console.log("before");
    const promise = new Promise(
            function (resolve, reject) {
                setTimeout(() => resolve(), t);
            });
    await promise;
    console.log("after");
}

// console.log("Before call");
// pause(1000);
// console.log("After call");