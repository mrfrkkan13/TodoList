// tüm elementleri seçtik
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group"); 
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();
// tüm event listener
function eventListeners(){
    form.addEventListener("submit",addTodo);  

}
function addTodo(e){
    const newTodo=todoInput.value.trim();
    addTodoToUI(newTodo);
    e.preventDefault();
}
function addTodoToUI(newTodo){  
    const listItem=document.createElement("li");
    const link=document.createElement("a");
    listItem.className="list-group-item d-flex justify-content-between";
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class ='fa fa-remove'></i>";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todolist.appendChild(listItem);
    todoInput.value="";
}