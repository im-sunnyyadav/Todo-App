const input= document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(input.value === "") {
        alert("You must write something !!");
    }
    else {
        let newLi = document.createElement("li");
        newLi.innerHTML = input.value;
        listContainer.appendChild(newLi);
        let cutIcon = document.createElement("span");
        cutIcon.innerHTML = "\u00d7";
        newLi.appendChild(cutIcon);
    }
    input.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML= localStorage.getItem("data");
}
showData();