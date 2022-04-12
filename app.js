const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
 let userData = inputBox.value;
 if(userData.trim() !=0){
  addBtn.classList.add("active");
 }else{
  addBtn.classList.remove("active");
 }
}
showTasks();
addBtn.onclick = ()=>{
 let userData = inputBox.value;
 let getLocalStorage = localStorage.getItem("New Todo")
 if(getLocalStorage == null){
  listArr = [];
 }else{
  listArr = JSON.parse(getLocalStorage)
 }
 listArr.push(userData);
 localStorage.setItem("New Todo", JSON.stringify(listArr));
 showTasks();
}

function showTasks(){
 let getLocalStorage = localStorage.getItem("New Todo")
 if(getLocalStorage == null){
  listArr = [];
 }else{
  listArr = JSON.parse(getLocalStorage)
 }
 // clear all button functionality
 const pendingNumb = document.querySelector(".pendingNumb")
 pendingNumb.textContent = listArr.length; //passing the length value in pendingNumb
 if(listArr.length >0){  //if the array is greater than 0
  deleteAllBtn.classList.add("active") //active the clear all button
 }else{
  deleteAllBtn.classList.remove("active");
 }
 let newLiTag = ''
 listArr.forEach((element, index) => {
  newLiTag += `<li> ${element} <span onclick="deleteTask()";><i class ="fas fa-trash"></i></span></li>`;
 });
 todoList.innerHTML = newLiTag;
 inputBox.value = "";
}

// delete task function 
function deleteTask(index){
 let getLocalStorage = localStorage.getItem("New Todo");
 listArr = JSON.parse(getLocalStorage);
 listArr.splice(index, 1)  //remove or delete the particular indexed li

 // after removing the li again update the local storage
 localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
 showTasks() //calling showtask function
}

// making the clear all button functionality
deleteAllBtn.onclick = ()=>{
 listArr = [] //empty an array
 // after deleting all again update the local storage
 localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
 showTasks();5
}