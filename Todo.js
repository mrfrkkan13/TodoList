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
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    filter.addEventListener("keyup",filterTodos);
    secondCardBody.addEventListener("click",deleteTodo);

}

function filterTodos(e){
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");
    
    
    listItems.forEach(function(listItem){
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display: none !important");
          
        }else{
            listItem.setAttribute("style","display: block");
      
        }
    });
}

function deleteTodo(e){
    if(e.target.className == "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarı ile silindi");
    }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo == deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

//todo aldım
function addTodo(e){
    const newTodo=todoInput.value.trim();
    if(newTodo == ""){
        showAlert("danger","lütfen bir todo giriniz...");
    }else{
        addTodoToUI(newTodo);
        addTodoToLocalstorage(newTodo);
        showAlert("success","Todo Başarı ile eklendi...");
    }
    e.preventDefault();
}

//arayüze todo ekledim
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

function showAlert(type,mesage){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=mesage;

    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },3000);
}

function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToLocalstorage(newTodo){
    let todos=getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

