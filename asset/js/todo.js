btnVazife = document.querySelector('#Create-task');
porojeD = document.querySelector('.poroje-d');
addReminder = document.querySelector('#add-reminder');
addTimer = document.querySelector('#add-timer');
userId = document.querySelector('#user-id');
sBtn = document.querySelector('#s-btn');
todoList = document.querySelector('.todo-list');
boxInput = document.querySelector('.box-input');
textBox = document.getElementById('show')
todoInput = document.querySelector('.todo-input')
MySelect = document.querySelector('#MySelect')
MSelect = document.querySelector('#MSelect')
dateTmime = document.querySelector('.date-tmime')
userT = document.querySelector('#user-t')
boxItem = document.querySelector('.box-item')
va = document.querySelector('#va');
btnVazif = document.querySelector('#btn-vazife')


let isEditMood = false;




sBtn.addEventListener("click", addtodo);
let taskId = 0;
document.addEventListener("DOMContentLoaded", getLocalTodos)

todoList.addEventListener('click', onclickItem);

// Editing
function onclickItem(e) {
    isEditMood = true;

    e.target.classList.add('edit-mood');
    todoInput.value = e.target.textContent;
    userT.value = e.target.textContent;
    dateTmime.value = e.target.textContent;
    //todoInput.value = e.target.textContent;
    MSelect.value = e.target.textContent;
    btnVazif.innerHTML = "ویرایش"

}

// Editing

function addtodo(e) {
    e.preventDefault();
    console.log(e)

    const todoDiv = document.createElement('div');
    const newTodo = `  <ul>
<li class="col-md-10">

    <div class="row">
        <div class="col-md-11 mt-3 check-taxt">  
        <div id="u1">${todoInput.value}</div>
        <div id="u1">${todoInput.value}</div>
        <div id="u2">${userT.value}</div>
        <div id="u3">${MySelect.value}</div>
        <div id="u4">${MSelect.value}</div>
        <div id="u5">${dateTmime.value}</div>
             <span><i class="fa fa-trash"></i></span>
        </div>
    </div>
</li>
</ul>`
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    var tasks = {
        id: taskId,
        title: todoInput.value,
        user: userT.value,
        desc: MySelect.value,
        MySelect: MSelect.value,
        time: dateTmime.value,
    }
    saveLocalTodos(tasks);
    todoInput.value = "";
    userT.value = "";
    dateTmime.value = "";
    MSelect.value = "";
    MySelect.value = "";
    textBox.style.display = 'none'
    taskId++;
}


// remove
todoList.addEventListener("click", checkRemo);
function checkRemo(e) {
    const classList = [...e.target.classList]
    const item = e.target;
    console.log(item.parentElement);
    if (classList[1] === "fa-trash") {
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }

    // Editing

    if (isEditMood) {
        const itmeToEdit = itemList.querySelector('.edit-mood')
        removeLocalTodos(itmeToEdit.textContent);
        itmeToEdit.remove();
        btnVazif.innerHTML = "ایجاد وظیفه"
        isEditMood = false;
    }

    // Editing

}
// end remove
function saveLocalTodos(todo) {
    let savedTodos = localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
    savedTodos.push(todo)
    localStorage.setItem('todos', JSON.stringify(savedTodos));
}

// remo
function removeLocalTodos(todo) {
    let savedTodos = localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
    const filtertodo = savedTodos.filter(
        (t) => t !== todo.childNodes[0].data.trim()
    );
    localStorage.setItem("todos", JSON.stringify(filtertodo));
    debugger;
}

// remo
function getLocalTodos() {
    let savedTodos = localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem("todos")) : [];
    savedTodos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("task-r");
        const newTodo = `  <ul class = "task-r">
        <li class="col-md-10 ">
                    <div class="row">
                <div class="col-md-11 mt-3 check-taxt">
                ${todo.title}
                </br>
                ${todo.user}
                </br>
                ${todo.desc}
                </br>
                ${todo.MySelect}
                </br>
                ${todo.time}
                </br>
                     <span><i class="fa fa-trash" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>
        </ul>`
        todoDiv.innerHTML = newTodo;
        todoList.appendChild(todoDiv);
    });
}
function getLocalTasks() {
    let saveTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    saveTasks.forEach((task) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("todo-list");
        const newTodo = `
      <div id="u1">${task.id}</div>
      <div id="u1">${task.title}</div>
      <div id="u2">${task.user}</div>
      <div id="u3">${task.desc}</div>
      <div id="u4">${task.MySelect}</div>
      <div id="u5">${task.time}</div>`
        taskCounter = task.id + 1;
        taskDiv.innerHTML = newTodo;
        taskrow.appendChild(taskDiv);
    });
}


function editLocalTasks(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            break;
        }
    }
}
