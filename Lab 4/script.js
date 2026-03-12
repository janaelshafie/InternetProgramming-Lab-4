class Task{
constructor(text){
  this.text=text
  this.completed=false
  }
}

let tasks=[]

const input=document.getElementById("taskInput")
const addBtn=document.getElementById("addBtn")
const list=document.getElementById("taskList")

addBtn.addEventListener("click",addTask)

function addTask(){

  const text=input.value.trim()

  if(text==="") return

  const task=new Task(text)

  tasks.push(task)

  input.value=""

  renderTasks()

}

function renderTasks(){

  list.innerHTML=""

  tasks.forEach((task,index)=>{

  const li=document.createElement("li")

  li.textContent=task.text

  if(task.completed){
    li.classList.add("completed")
  }

  li.addEventListener("click",()=>{
    task.completed=!task.completed
    renderTasks()
  })

  const delBtn=document.createElement("button")

  delBtn.textContent="Delete"

  delBtn.classList.add("delete-btn")

  delBtn.addEventListener("click",(e)=>{
    e.stopPropagation()
    tasks.splice(index,1)
    renderTasks()
  })

  li.appendChild(delBtn)

  list.appendChild(li)

  })

}