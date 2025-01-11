// let ctr = 0;
// function callback() {
//     console.log(ctr);
//     const el = document.querySelectorAll("h1","h4")[0];
//     el.innerHTML = ctr;
//     ctr++;    
// }

// setInterval(callback,1000)

function deleteRandomTodo(){
    const el = document.querySelector("h1");
    const parentElement = element.parentNode;
    parentElement.removeChild(el);
}

