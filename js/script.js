let todos = [];

function addTodo(){
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value.trim() === '' || todoDate.value === ''){
        alert('Please enter both a todo item and a due date');
        return;
    }

    todos.push({
        todo: todoInput.value.trim(),
        date: todoDate.value
    });

    todoInput.value = '';
    todoDate.value = '';

    renderTodos();
}

function renderTodos(){
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(item => {
        todoList.innerHTML += `
            <li>
                <p class="text-2xl">
                    ${item.todo}
                    <span class="text-sm text-gray-500">(${item.date})</span>
                </p>
                <hr/>
            </li>
        `;
    });
}

function deleteAllTodo(){
    document.getElementById('todo-list').innerHTML = '';
}

function filterTodo(){
    const filterDate = document.getElementById('todo-date').value;

    if (!filterDate){
        alert('Please select a date first');
        return;
    }

    const filtered = todos.filter(item => item.date === filterDate);
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (filtered.length === 0){
        todoList.innerHTML = `
            <li class="text-center text-gray-400 py-4">
                There's no todo list
            </li>
        `;
        return;
    }

    filtered.forEach(item => {
        todoList.innerHTML += `
            <li>
                <p class="text-2xl">
                    ${item.todo}
                    <span class="text-sm text-gray-500">(${item.date})</span>
                </p>
                <hr/>
            </li>
        `;
    });
    console.log(filterDate, todos);
}
