import { endOfTomorrow, isTomorrow } from "date-fns"
import { format } from "date-fns";

export function projectArrayLoad() {
    let projectArray = localStorage.getItem("projects")
    if(!projectArray) {
        const projectsArray = []
        console.log("No Local Project Found")
         let defaultProject = createDefaultProject()
         console.log(defaultProject)
         projectsArray.push(defaultProject)
         localStorage.setItem("projects", JSON.stringify(projectsArray))
         return projectsArray
    }
    else if(projectArray) {
        console.log("Found Local Projects")
        let newArray = restoreProjects(projectArray)
        return newArray
    }
}



export class Project {
    constructor(title, description, due, priority) {
        this.title = title
        this.description = description
        this.due = due
        this.priority = priority
    }
    
    addTooArray() {
        let projectArray = localStorage.getItem("projects")
        let unstringProjects = JSON.parse(projectArray)
        unstringProjects.push(this)
        localStorage.setItem("projects", JSON.stringify(unstringProjects))
    }
    saveLocale() {
        console.log("defunct")
        
    }

}

function createDefaultProject() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let formattedDate = format(tomorrow, "MM/dd/yyyy")
    let defaultProject = new Project("Get Groceries", "Something that would be good on the BBQ", formattedDate, 2)
    return defaultProject
}

function restoreProjects(projectArrayOld) {
    const projectsArrayNew = []
    const oldArray = JSON.parse(projectArrayOld)
    console.log(oldArray)
    for(let i = 0; i < oldArray.length; i++){
        let obj = oldArray[i]
        let newObj = new Project(obj.title, obj.description, obj.due, obj.priority)
        projectsArrayNew.push(newObj)
    }
    console.log(projectsArrayNew)
    return projectsArrayNew
}