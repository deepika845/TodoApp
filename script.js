var render;
var deleteTask;
var addTodo;
(function TodoApp(){
    let actions = {ADD : "ADD", DEL:"DEL",EDIT:"EDIT", SET_COMPLETED:"SET_COMPLETED"};
    let todos= [];

    function changeState(state, action, payload){
        switch(action){
            case actions.ADD:
                console.log("pass")
                return Object.freeze([...state,payload]);
            break;
            case actions.DEL:
                const updatedState = [...state];
                return updatedState.filter((item) => item.input!==payload);

        }
    }
    render =  function (){
            
             var allTasks = document.querySelector("#tasks");
             allTasks.innerHTML=``;
             todos.forEach((item)=>{
                 allTasks.innerHTML += `<div class="task">
                 <span id="taskname" >${item.input}</span>
                 <button class="delete" onclick= deleteTask()>X</button>
             </div>`;
             })

        //     document.querySelector("#tasks").innerHTML += 
        //     `<div class="task">
        //     <span id="taskname" >${document.querySelector('#newTask input').value}</span>
        //     <button class="delete" onclick= deleteTask()>X</button>
        // </div>`;
        
        var tasks = document.querySelectorAll("#taskname");
         for(var i=0 ; i< tasks.length ;i++){
             tasks[i].onclick = function(){
                 this.classList.toggle('completed');
             }
         }
         document.querySelector("#newTask input").value="";

    }
    addTodo = function (){
        var input = document.querySelector('#newTask input').value;
        if(input.length === 0){
            alert("Please enter a task");
        }
        else{
            const updatedTodo = changeState(todos,"ADD", {input,status:"false"});
            console.log(updatedTodo);
            todos=updatedTodo;
            render();
        }

    }


       deleteTask =  function(delItem){
        var current_tasks = document.querySelectorAll(".delete");
         for(var i=0 ; i< current_tasks.length ;i++){
             current_tasks[i].onclick = function(){
                 this.parentNode.remove();
             }
         }
        // const updatedTodo = changeState(todos,"DEL",delItem);
        // console.log(updatedTodo);
        // todos = updatedTodo;

         
        }
    
})();