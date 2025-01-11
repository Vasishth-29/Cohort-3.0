//Async Await : It looks and behaves like an syncronous code but still it is an async code , making it easier to read and maintain.
//async/await is essentially syntactic sugar on top of Promises. e.i. it is a same thing to write in a different way but beautiful.

// Question
// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

function setTimeoutPromisiefied(duration){
    return new Promise((resolve, reject) => {
        setTimeout(resolve,duration);
    })
}

async function solve() {
    await setTimeoutPromisiefied(1000);
    console.log("hi");
    await setTimeoutPromisiefied(3000);
    console.log("hello");
    await setTimeoutPromisiefied(5000);
    console.log("hi there");
}

solve();