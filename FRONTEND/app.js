let heading = document.querySelector("h2");
let inp = document.querySelector("input");
inp.addEventListener("input",function(){
    heading.innerText = inp.value;
})