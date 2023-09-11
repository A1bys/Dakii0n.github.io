document.addEventListener('DOMContentLoaded', function () {
    // JavaScript для добавления и удаления дел
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const deleteAllButton = document.getElementById('delete-all-button');
    const todoList = document.getElementById('todo-list');
    const noItemsFound = document.querySelector('.no-items-found');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const newRow = document.createElement('tr');
            const newCell = document.createElement('td');
            newCell.textContent = todoText;
            newRow.appendChild(newCell);
            todoList.appendChild(newRow);
            todoInput.value = '';
            noItemsFound.classList.remove('active');
        }
    });

    deleteAllButton.addEventListener('click', () => {
        todoList.innerHTML = '';
        noItemsFound.classList.add('active');
    });
});
