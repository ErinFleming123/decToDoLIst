
let newListName
document.getElementById("addListName").addEventListener("click", addListTitle)




  function addListTitle() {


    

    let div = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let addTaskBtn = document.createElement("BUTTON")
    addTaskBtn.innerHTML = "Add Task"

  
    
    
    
      
      let textInput = document.getElementById("listName")
      let newListName = textInput.value

      if (newListName !=="") {

      
  
      
      

      
      
      
        
        

      

      p1.innerHTML = `${newListName}<button type="button" onclick="deleteList()">Delete List</button>`
      let taskInputBox = `<form><input type = 'text' size = '40' placeholder= 'Write new task here'><button type="button" onclick = "addTask()">Add Task</button></form> `
    
      
      p2.innerHTML = taskInputBox
      document.body.appendChild(div)
      div.appendChild(p1)
      //p1.appendChild(deleteListBtn)
      
      div.appendChild(p2)

      textInput.value = ""

      } else {
        alert("Please add a new list name")
      }
    

      

      
    

      
    
  }

  function deleteList() {
    //alert("hi!")
    
    
      
  

    

  }
  

  function addTask() {
    
    //alert("Hi!")

  }

  
  

  




//document.getElementById("addListName").addEventListener("click", addListTitle)





/*function addListTitle() {
  let div = document.createElement("div")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  
  
  let deleteListBtn = document.createElement("BUTTON")
  deleteListBtn.innerHTML = "Delete List"
  let addTaskBtn = document.createElement("Button")
  addTaskBtn.innerHTML = "Add Task"
  let textInput = document.getElementById("listName")
  let newListName = textInput.value
  p1.innerHTML = newListName
  let taskInputBox = `<form></form><input type = 'text' size = '40' placeholder= 'Write new task here' class="newTaskInput"><input type = 'button' value = 'Add Task' id="addTask"></form> `

  
  p2.innerHTML = taskInputBox
  document.body.appendChild(div)
  div.appendChild(p1)
  p1.appendChild(deleteListBtn)
  
  div.appendChild(p2)
  document.getElementById("addTask").addEventListener("click", addTask)

  /*function addTask() {
    
    let taskTextInput = document.getElementById("newTaskInput")
    let newTaskName = taskTextInput.value
    let ul = document.createElement("UL")
    let li = document.createElement("LI")
    document.body.appendChild(ul)
    ul.appendChild(li)
    li.innerHTML = newTaskName*/
  

  

  /*}

  
  }*/
  
  
  

  
  
  
  


  
  
  
  
  
  


  
  
  

  
  
