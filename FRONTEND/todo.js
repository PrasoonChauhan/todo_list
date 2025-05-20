let add = document.querySelector(".add");
let input = document.querySelector("input");
let list = document.querySelector("ul");
add.addEventListener("click",()=>{
    let newElement = document.createElement("li");
    let deleteElement = document.createElement("button");
    deleteElement.classList.add("dltElement");
    deleteElement.innerText = "Delete";
       newElement.innerText = input.value;
       list.append(newElement);
       newElement.appendChild(deleteElement);
       input.value = "";
})

let ul = document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName == "BUTTON")
    {
        let parent = e.target.parentElement;
        parent.remove();
    } 
});