
export default function Project(title,  description, dueDate, priority,) {
    console.log(this)
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority= priority;
    this.goals= [
       {
          "title": "HotDog",
          "description": "description",
          "dueDate": "dueDate",
          "priority": "3",
       }
    ]
 }