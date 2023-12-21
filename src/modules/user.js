import editIcon from "../icons/edit.svg"

export default function checkForName() {
    let localName = localStorage.getItem("name")
    let div = document.querySelector(".welcomeUser")
    console.log(div)
    if (!localName) {
        console.log("noname")
       let greetGuest = welcomeGuest(div)
    }
    if (localName) {
        console.log(localName)
        let greetUser = welcomeUser(div, localName)
    }
}

function createUser(name) {
    localStorage.setItem("name", name)
    return {name};
}

function welcomeGuest(div) {
        div.textContent = "Welcome Guest"
        let createIcon = createEditIcon(div)
}

function welcomeUser(div, localName){
    console.log(div)
    console.log(localName)
    div.textContent = `Welcome ${localName}`
    let createIcon = createEditIcon(div)
}


function createEditIcon(div) {     
    let createIcon = document.createElement("img")   
    createIcon.src = editIcon;
    div.appendChild(createIcon)
    createIcon.addEventListener("click", (e) => requestName(div) )
}

function requestName(div) {
    let name = prompt("Please enter your name", "Guest...")
    let setName = createUser(name)
    div.textContent = `Welcome ${name}`
    let createIcon = createEditIcon(div)
}