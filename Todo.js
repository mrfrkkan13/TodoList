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
//todo aldım
function addTodo(e){
    const newTodo=todoInput.value.trim();
    if(newTodo == ""){
        showAlert("danger","lütfen bir todo giriniz...");
    }else{
        addTodoToUI(newTodo);
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
    /*<!-- <div class="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
      </div> -->*/
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=mesage;

    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },3000);
}

