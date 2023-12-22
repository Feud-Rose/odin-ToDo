
export default class Project {
    constructor(title, description, due, priority) {
        this.title = title
        this.description = description
        this.due = due
        this.priority = priority
    }
    
    saveLocale() {
        console.log(this)
        localStorage.setItem("projects", JSON.stringify(this))
    }

}

