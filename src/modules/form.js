import { format, compareAsc } from "date-fns";
import Project from "./project";

export default function formEvent(){
    const newProject = document.querySelector(".newProject")
    newProject.addEventListener("click", (e) => {
        let tar = e.target.classList
        console.log(tar)
        if (e.target.classList == 'submitProject') {
            let newProject = getFormValues()
            console.log(newProject)
            newProject.saveLocale()
        }   
    })
}

function getFormValues() {           
        let title = document.getElementById("projectTitle").value
        let description = document.getElementById("projectDescription").value
        let dueDate = document.getElementById("projectDue").value
        let priority = document.getElementById("projectPriority").value
        let cleanDate = format(dueDate, "MM/dd/yyyy")
        document.getElementById("newProjectForm").reset()
        let newProject = new Project(title, description, cleanDate, priority)
        return newProject
}