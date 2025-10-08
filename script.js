
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value.trim() === ''){ 
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let editBtn = document.createElement("img")
        editBtn.src = "images/Edit-icon.png";
        editBtn.classList.add("editBtn")
        li.appendChild(editBtn)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";   
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }
    else if(e.target.tagName === "SPAN"){
        
        e.target.parentElement.remove();   
        saveData();
    }
    const editbtn = e.target.querySelector(".editBtn")
    if(e.target.classList.contains("checked")){
        editbtn.style.pointerEvent = "none";
        editbtn.style.opacity ="0.5";
        editbtn.classList.add("disabled"); 
        saveData();
        
    }
    else{
        editbtn.style.pointerEvent = "auto";
        editbtn.style.opacity ="1";
        editbtn.classList.remove("disabled");
        saveData();
        
    }
  
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


inputBox.addEventListener("keydown", (e)=>{
   if(e.key === "Enter"){
    addTask();
   }
})