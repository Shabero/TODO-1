
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');

    const todos = [
        {
            id: 1,
            text: 'Todo 1',
            completed: false
        },
        {
            id: 2,
            text: 'Todo 2',
            completed: false
        }
    ];

    const renderTodos = () => {
        list.innerHTML = todos.map(todo => {
            return `<li>
                        <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
                        <span>${todo.text}</span>
                    </li>`;
        }).join('');
    };

    renderTodos();

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const newTodo = {
                id: todos.length + 1,
                text: taskText,
                completed: false
            };

            todos.push(newTodo);
            renderTodos();
            taskInput.value = '';
        }
    });
});