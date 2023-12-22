import './styles.css'
import checkForName from './modules/user'
import Project from './modules/project'
import { getTime } from 'date-fns'
import formEvent from "./modules/form"

addEventListener('submit', (e) => {
    e.preventDefault()
  });
  
  



(function loadData() {
//check if username set
 let checkName = checkForName()
 let testProject = new Project("test", "describe test", Date(getTime), 3)
 console.log(testProject)
 let saveTest = testProject.saveLocale()
 let loadForm = formEvent()


})()