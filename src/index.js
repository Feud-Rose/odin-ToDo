import './styles.css'
import checkForName from './modules/user'
import * as project from './modules/project'
import { getTime } from 'date-fns'
import formEvent from "./modules/form"
import displayProjects from './modules/displayContent,js'


addEventListener('submit', (e) => {
    e.preventDefault()
  });
  
  



(function loadData() {
//check if username set
 let checkName = checkForName()
 let checkLocalProjects = project.projectArrayLoad()
 let loadForm = formEvent()
console.log(checkLocalProjects)
let displayContent = displayProjects(checkLocalProjects)
})()