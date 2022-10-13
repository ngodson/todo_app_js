const todoInputEl = document.querySelector(".todoInput");
const todoBtnEl = document.querySelector(".todoBtn");
const ulListEl = document.querySelector(".ulList");
const todoListContainerEL = document.querySelector(".todoListContainer");

todoBtnEl.addEventListener("click", ()=> {
    if(!todoInputEl.value) {
        alert("Kindly insert an action to list");
    }
    else {
        let today = new Date();
        let day = today.getDay();
        let month = today.getMonth();
        let year = today.getFullYear();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        let liList = document.createElement("li");
        liList.innerHTML =` 
        <br /> 
        ${todoInputEl.value}  
        &nbsp  &nbsp <i class="fas fa-thin fa-xmark"></i>
        &nbsp
        created on:
        ${hours}:
        ${minutes}
        ${day}/
        ${month}/
        ${year}
        `
        ulListEl.appendChild(liList)
        todoInputEl.value = ""
    }
    
})


todoListContainerEL.addEventListener("click", (e) => { 
    if(e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.remove();
    }
})